import { Construct } from "constructs";
import { TerraformStack } from "cdktf";
import {
  GoogleProvider,
  CloudRunService,
  CloudRunServiceIamMember
} from "@cdktf/provider-google";

export class CloudRunStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const projectId = "quality-tag-mobile-app"; // 👈 ベタ書きOK！

    new GoogleProvider(this, "google", {
      project: projectId,
      region: "asia-northeast1",
    });

    const service = new CloudRunService(this, "backend-api-service", {
      name: "backend-api",
      location: "asia-northeast1",
      template: {
        spec: {
          containers: [
            {
              image: `gcr.io/${projectId}/backend-api:latest`,
              ports: [{ containerPort: 8080 }],
            },
          ],
        },
        metadata: {
          annotations: {
            "autoscaling.knative.dev/minScale": "1",
          },
        },
      },
      traffics: [
        {
          percent: 100,
          latestRevision: true,
        },
      ],
    });

    new CloudRunServiceIamMember(this, "unauthenticated-access", {
      service: service.name,
      location: service.location,
      role: "roles/run.invoker",
      member: "allUsers",
    });
  }
}
