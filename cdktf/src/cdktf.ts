import { App } from "cdktf";
import { CloudRunStack } from "./stacks/cloud-run";

const app = new App();
new CloudRunStack(app, "quality-tag-cloud-run");
app.synth();
