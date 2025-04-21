import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { GoogleProvider } from './.gen/providers/google/provider';
import { CloudRunService } from './.gen/providers/google/cloud-run-service';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new GoogleProvider(this, 'google', {
      project: 'quality-tag-mobile-app',
      region: 'asia-northeast1',
    });

    new CloudRunService(this, 'quality-tag-api', {
      name: 'quality-tag-api',
      location: 'asia-northeast1',

      template: {
        spec: {
          containers: [{
            image: 'asia-northeast1-docker.pkg.dev/quality-tag-mobile-app/cloud-run-source-deploy/quality-tag-api@sha256:60af731bca08a0cf90e0eb38b8a8effda7eeedf70992a491f1980197d448efbd',
            ports: [{ containerPort: 8080 }],
            resources: { limits: { memory: '512Mi', cpu: '1000m' } },
            startupProbe: {
              tcpSocket: { port: 8080 },
              initialDelaySeconds: 0,
              timeoutSeconds: 240,
              periodSeconds: 240,
              failureThreshold: 1
            }
          }],
          containerConcurrency: 80,
          timeoutSeconds: 300,
          serviceAccountName: '252192332933-compute@developer.gserviceaccount.com'
        },
        metadata: {
          annotations: {
            "autoscaling.knative.dev/maxScale": "1",
            "run.googleapis.com/cpu-throttling": "true"
          }
          // GCPが自動付与するアノテーションはここには書かない
        }
      },

      traffic: [{
        percent: 100,
        latestRevision: true
      }],

      metadata: {
        annotations: {
          "run.googleapis.com/ingress": "all"
        }
        // GCPが自動付与するアノテーションはここには書かない
      },

      // lifecycleブロックを追加して、差分が出ていた項目を無視するように指定
      lifecycle: {
        ignoreChanges: [
          // --- 必要なもの (残す) ---
          // トップレベルのメタデータ関連のアノテーション
          "metadata[0].annotations[\"run.googleapis.com/build-enable-automatic-updates\"]",
          "metadata[0].annotations[\"run.googleapis.com/build-id\"]",
          "metadata[0].annotations[\"run.googleapis.com/build-image-uri\"]",
          "metadata[0].annotations[\"run.googleapis.com/build-name\"]",
          "metadata[0].annotations[\"run.googleapis.com/client-name\"]",
          "metadata[0].annotations[\"run.googleapis.com/client-version\"]",
          "metadata[0].annotations[\"run.googleapis.com/operation-id\"]",
          "metadata[0].annotations[\"run.googleapis.com/urls\"]",
          "metadata[0].annotations[\"serving.knative.dev/creator\"]",
          "metadata[0].annotations[\"serving.knative.dev/lastModifier\"]",
          // テンプレート関連のアノテーションと計算値
          "template[0].metadata[0].annotations[\"run.googleapis.com/client-name\"]",
          "template[0].metadata[0].annotations[\"run.googleapis.com/client-version\"]",
          "template[0].metadata[0].annotations[\"run.googleapis.com/startup-cpu-boost\"]",
          "template[0].metadata[0].name",   // リビジョン名は自動生成されるので無視
          "template[0].metadata[0].labels", // ラベルも自動生成されるものがあるので無視

          // --- 不要なもの (削除またはコメントアウト) ---
          // "metadata[0].generation", // Warning
          // "metadata[0].resource_version", // Warning
          // "metadata[0].self_link",      // Warning
          // "metadata[0].uid",            // Warningの可能性
          // "status", // Warningの可能性
        ],
      }
    });
  }
}

const app = new App();
new MyStack(app, 'quality-tag-stack');
app.synth();