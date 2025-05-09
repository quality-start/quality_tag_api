// https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#access_approval_custom_endpoint GoogleProvider#access_approval_custom_endpoint}
  */
  readonly accessApprovalCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#access_context_manager_custom_endpoint GoogleProvider#access_context_manager_custom_endpoint}
  */
  readonly accessContextManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#access_token GoogleProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#active_directory_custom_endpoint GoogleProvider#active_directory_custom_endpoint}
  */
  readonly activeDirectoryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#alloydb_custom_endpoint GoogleProvider#alloydb_custom_endpoint}
  */
  readonly alloydbCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#apigee_custom_endpoint GoogleProvider#apigee_custom_endpoint}
  */
  readonly apigeeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#apikeys_custom_endpoint GoogleProvider#apikeys_custom_endpoint}
  */
  readonly apikeysCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#app_engine_custom_endpoint GoogleProvider#app_engine_custom_endpoint}
  */
  readonly appEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#artifact_registry_custom_endpoint GoogleProvider#artifact_registry_custom_endpoint}
  */
  readonly artifactRegistryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#assured_workloads_custom_endpoint GoogleProvider#assured_workloads_custom_endpoint}
  */
  readonly assuredWorkloadsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#beyondcorp_custom_endpoint GoogleProvider#beyondcorp_custom_endpoint}
  */
  readonly beyondcorpCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#big_query_custom_endpoint GoogleProvider#big_query_custom_endpoint}
  */
  readonly bigQueryCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#biglake_custom_endpoint GoogleProvider#biglake_custom_endpoint}
  */
  readonly biglakeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigquery_analytics_hub_custom_endpoint GoogleProvider#bigquery_analytics_hub_custom_endpoint}
  */
  readonly bigqueryAnalyticsHubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigquery_connection_custom_endpoint GoogleProvider#bigquery_connection_custom_endpoint}
  */
  readonly bigqueryConnectionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigquery_data_transfer_custom_endpoint GoogleProvider#bigquery_data_transfer_custom_endpoint}
  */
  readonly bigqueryDataTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigquery_datapolicy_custom_endpoint GoogleProvider#bigquery_datapolicy_custom_endpoint}
  */
  readonly bigqueryDatapolicyCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigquery_reservation_custom_endpoint GoogleProvider#bigquery_reservation_custom_endpoint}
  */
  readonly bigqueryReservationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#bigtable_custom_endpoint GoogleProvider#bigtable_custom_endpoint}
  */
  readonly bigtableCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#billing_custom_endpoint GoogleProvider#billing_custom_endpoint}
  */
  readonly billingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#billing_project GoogleProvider#billing_project}
  */
  readonly billingProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#binary_authorization_custom_endpoint GoogleProvider#binary_authorization_custom_endpoint}
  */
  readonly binaryAuthorizationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#certificate_manager_custom_endpoint GoogleProvider#certificate_manager_custom_endpoint}
  */
  readonly certificateManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_asset_custom_endpoint GoogleProvider#cloud_asset_custom_endpoint}
  */
  readonly cloudAssetCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_billing_custom_endpoint GoogleProvider#cloud_billing_custom_endpoint}
  */
  readonly cloudBillingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_build_custom_endpoint GoogleProvider#cloud_build_custom_endpoint}
  */
  readonly cloudBuildCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_build_worker_pool_custom_endpoint GoogleProvider#cloud_build_worker_pool_custom_endpoint}
  */
  readonly cloudBuildWorkerPoolCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_functions_custom_endpoint GoogleProvider#cloud_functions_custom_endpoint}
  */
  readonly cloudFunctionsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_identity_custom_endpoint GoogleProvider#cloud_identity_custom_endpoint}
  */
  readonly cloudIdentityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_ids_custom_endpoint GoogleProvider#cloud_ids_custom_endpoint}
  */
  readonly cloudIdsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_iot_custom_endpoint GoogleProvider#cloud_iot_custom_endpoint}
  */
  readonly cloudIotCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_resource_manager_custom_endpoint GoogleProvider#cloud_resource_manager_custom_endpoint}
  */
  readonly cloudResourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_run_custom_endpoint GoogleProvider#cloud_run_custom_endpoint}
  */
  readonly cloudRunCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_run_v2_custom_endpoint GoogleProvider#cloud_run_v2_custom_endpoint}
  */
  readonly cloudRunV2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_scheduler_custom_endpoint GoogleProvider#cloud_scheduler_custom_endpoint}
  */
  readonly cloudSchedulerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloud_tasks_custom_endpoint GoogleProvider#cloud_tasks_custom_endpoint}
  */
  readonly cloudTasksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloudbuildv2_custom_endpoint GoogleProvider#cloudbuildv2_custom_endpoint}
  */
  readonly cloudbuildv2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#clouddeploy_custom_endpoint GoogleProvider#clouddeploy_custom_endpoint}
  */
  readonly clouddeployCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#cloudfunctions2_custom_endpoint GoogleProvider#cloudfunctions2_custom_endpoint}
  */
  readonly cloudfunctions2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#composer_custom_endpoint GoogleProvider#composer_custom_endpoint}
  */
  readonly composerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#compute_custom_endpoint GoogleProvider#compute_custom_endpoint}
  */
  readonly computeCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#container_analysis_custom_endpoint GoogleProvider#container_analysis_custom_endpoint}
  */
  readonly containerAnalysisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#container_attached_custom_endpoint GoogleProvider#container_attached_custom_endpoint}
  */
  readonly containerAttachedCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#container_aws_custom_endpoint GoogleProvider#container_aws_custom_endpoint}
  */
  readonly containerAwsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#container_azure_custom_endpoint GoogleProvider#container_azure_custom_endpoint}
  */
  readonly containerAzureCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#container_custom_endpoint GoogleProvider#container_custom_endpoint}
  */
  readonly containerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#core_billing_custom_endpoint GoogleProvider#core_billing_custom_endpoint}
  */
  readonly coreBillingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#credentials GoogleProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#data_catalog_custom_endpoint GoogleProvider#data_catalog_custom_endpoint}
  */
  readonly dataCatalogCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#data_fusion_custom_endpoint GoogleProvider#data_fusion_custom_endpoint}
  */
  readonly dataFusionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#data_loss_prevention_custom_endpoint GoogleProvider#data_loss_prevention_custom_endpoint}
  */
  readonly dataLossPreventionCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#data_pipeline_custom_endpoint GoogleProvider#data_pipeline_custom_endpoint}
  */
  readonly dataPipelineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#database_migration_service_custom_endpoint GoogleProvider#database_migration_service_custom_endpoint}
  */
  readonly databaseMigrationServiceCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dataflow_custom_endpoint GoogleProvider#dataflow_custom_endpoint}
  */
  readonly dataflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dataplex_custom_endpoint GoogleProvider#dataplex_custom_endpoint}
  */
  readonly dataplexCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dataproc_custom_endpoint GoogleProvider#dataproc_custom_endpoint}
  */
  readonly dataprocCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dataproc_metastore_custom_endpoint GoogleProvider#dataproc_metastore_custom_endpoint}
  */
  readonly dataprocMetastoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#datastore_custom_endpoint GoogleProvider#datastore_custom_endpoint}
  */
  readonly datastoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#datastream_custom_endpoint GoogleProvider#datastream_custom_endpoint}
  */
  readonly datastreamCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#deployment_manager_custom_endpoint GoogleProvider#deployment_manager_custom_endpoint}
  */
  readonly deploymentManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dialogflow_custom_endpoint GoogleProvider#dialogflow_custom_endpoint}
  */
  readonly dialogflowCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dialogflow_cx_custom_endpoint GoogleProvider#dialogflow_cx_custom_endpoint}
  */
  readonly dialogflowCxCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#dns_custom_endpoint GoogleProvider#dns_custom_endpoint}
  */
  readonly dnsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#document_ai_custom_endpoint GoogleProvider#document_ai_custom_endpoint}
  */
  readonly documentAiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#document_ai_warehouse_custom_endpoint GoogleProvider#document_ai_warehouse_custom_endpoint}
  */
  readonly documentAiWarehouseCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#edgenetwork_custom_endpoint GoogleProvider#edgenetwork_custom_endpoint}
  */
  readonly edgenetworkCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#essential_contacts_custom_endpoint GoogleProvider#essential_contacts_custom_endpoint}
  */
  readonly essentialContactsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#eventarc_custom_endpoint GoogleProvider#eventarc_custom_endpoint}
  */
  readonly eventarcCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#filestore_custom_endpoint GoogleProvider#filestore_custom_endpoint}
  */
  readonly filestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#firebaserules_custom_endpoint GoogleProvider#firebaserules_custom_endpoint}
  */
  readonly firebaserulesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#firestore_custom_endpoint GoogleProvider#firestore_custom_endpoint}
  */
  readonly firestoreCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#game_services_custom_endpoint GoogleProvider#game_services_custom_endpoint}
  */
  readonly gameServicesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#gke_backup_custom_endpoint GoogleProvider#gke_backup_custom_endpoint}
  */
  readonly gkeBackupCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#gke_hub2_custom_endpoint GoogleProvider#gke_hub2_custom_endpoint}
  */
  readonly gkeHub2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#gke_hub_custom_endpoint GoogleProvider#gke_hub_custom_endpoint}
  */
  readonly gkeHubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#gkehub_feature_custom_endpoint GoogleProvider#gkehub_feature_custom_endpoint}
  */
  readonly gkehubFeatureCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#healthcare_custom_endpoint GoogleProvider#healthcare_custom_endpoint}
  */
  readonly healthcareCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iam2_custom_endpoint GoogleProvider#iam2_custom_endpoint}
  */
  readonly iam2CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iam_beta_custom_endpoint GoogleProvider#iam_beta_custom_endpoint}
  */
  readonly iamBetaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iam_credentials_custom_endpoint GoogleProvider#iam_credentials_custom_endpoint}
  */
  readonly iamCredentialsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iam_custom_endpoint GoogleProvider#iam_custom_endpoint}
  */
  readonly iamCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iam_workforce_pool_custom_endpoint GoogleProvider#iam_workforce_pool_custom_endpoint}
  */
  readonly iamWorkforcePoolCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#iap_custom_endpoint GoogleProvider#iap_custom_endpoint}
  */
  readonly iapCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#identity_platform_custom_endpoint GoogleProvider#identity_platform_custom_endpoint}
  */
  readonly identityPlatformCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#impersonate_service_account GoogleProvider#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#impersonate_service_account_delegates GoogleProvider#impersonate_service_account_delegates}
  */
  readonly impersonateServiceAccountDelegates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#kms_custom_endpoint GoogleProvider#kms_custom_endpoint}
  */
  readonly kmsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#logging_custom_endpoint GoogleProvider#logging_custom_endpoint}
  */
  readonly loggingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#looker_custom_endpoint GoogleProvider#looker_custom_endpoint}
  */
  readonly lookerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#memcache_custom_endpoint GoogleProvider#memcache_custom_endpoint}
  */
  readonly memcacheCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#ml_engine_custom_endpoint GoogleProvider#ml_engine_custom_endpoint}
  */
  readonly mlEngineCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#monitoring_custom_endpoint GoogleProvider#monitoring_custom_endpoint}
  */
  readonly monitoringCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#network_connectivity_custom_endpoint GoogleProvider#network_connectivity_custom_endpoint}
  */
  readonly networkConnectivityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#network_management_custom_endpoint GoogleProvider#network_management_custom_endpoint}
  */
  readonly networkManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#network_security_custom_endpoint GoogleProvider#network_security_custom_endpoint}
  */
  readonly networkSecurityCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#network_services_custom_endpoint GoogleProvider#network_services_custom_endpoint}
  */
  readonly networkServicesCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#notebooks_custom_endpoint GoogleProvider#notebooks_custom_endpoint}
  */
  readonly notebooksCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#org_policy_custom_endpoint GoogleProvider#org_policy_custom_endpoint}
  */
  readonly orgPolicyCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#os_config_custom_endpoint GoogleProvider#os_config_custom_endpoint}
  */
  readonly osConfigCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#os_login_custom_endpoint GoogleProvider#os_login_custom_endpoint}
  */
  readonly osLoginCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#privateca_custom_endpoint GoogleProvider#privateca_custom_endpoint}
  */
  readonly privatecaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#project GoogleProvider#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#public_ca_custom_endpoint GoogleProvider#public_ca_custom_endpoint}
  */
  readonly publicCaCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#pubsub_custom_endpoint GoogleProvider#pubsub_custom_endpoint}
  */
  readonly pubsubCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#pubsub_lite_custom_endpoint GoogleProvider#pubsub_lite_custom_endpoint}
  */
  readonly pubsubLiteCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#recaptcha_enterprise_custom_endpoint GoogleProvider#recaptcha_enterprise_custom_endpoint}
  */
  readonly recaptchaEnterpriseCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#redis_custom_endpoint GoogleProvider#redis_custom_endpoint}
  */
  readonly redisCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#region GoogleProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#request_reason GoogleProvider#request_reason}
  */
  readonly requestReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#request_timeout GoogleProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#resource_manager_custom_endpoint GoogleProvider#resource_manager_custom_endpoint}
  */
  readonly resourceManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#resource_manager_v3_custom_endpoint GoogleProvider#resource_manager_v3_custom_endpoint}
  */
  readonly resourceManagerV3CustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#scopes GoogleProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#secret_manager_custom_endpoint GoogleProvider#secret_manager_custom_endpoint}
  */
  readonly secretManagerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#security_center_custom_endpoint GoogleProvider#security_center_custom_endpoint}
  */
  readonly securityCenterCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#service_management_custom_endpoint GoogleProvider#service_management_custom_endpoint}
  */
  readonly serviceManagementCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#service_networking_custom_endpoint GoogleProvider#service_networking_custom_endpoint}
  */
  readonly serviceNetworkingCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#service_usage_custom_endpoint GoogleProvider#service_usage_custom_endpoint}
  */
  readonly serviceUsageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#source_repo_custom_endpoint GoogleProvider#source_repo_custom_endpoint}
  */
  readonly sourceRepoCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#spanner_custom_endpoint GoogleProvider#spanner_custom_endpoint}
  */
  readonly spannerCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#sql_custom_endpoint GoogleProvider#sql_custom_endpoint}
  */
  readonly sqlCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#storage_custom_endpoint GoogleProvider#storage_custom_endpoint}
  */
  readonly storageCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#storage_insights_custom_endpoint GoogleProvider#storage_insights_custom_endpoint}
  */
  readonly storageInsightsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#storage_transfer_custom_endpoint GoogleProvider#storage_transfer_custom_endpoint}
  */
  readonly storageTransferCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#tags_custom_endpoint GoogleProvider#tags_custom_endpoint}
  */
  readonly tagsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#tags_location_custom_endpoint GoogleProvider#tags_location_custom_endpoint}
  */
  readonly tagsLocationCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#tpu_custom_endpoint GoogleProvider#tpu_custom_endpoint}
  */
  readonly tpuCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#user_project_override GoogleProvider#user_project_override}
  */
  readonly userProjectOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#vertex_ai_custom_endpoint GoogleProvider#vertex_ai_custom_endpoint}
  */
  readonly vertexAiCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#vpc_access_custom_endpoint GoogleProvider#vpc_access_custom_endpoint}
  */
  readonly vpcAccessCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#workflows_custom_endpoint GoogleProvider#workflows_custom_endpoint}
  */
  readonly workflowsCustomEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#zone GoogleProvider#zone}
  */
  readonly zone?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#alias GoogleProvider#alias}
  */
  readonly alias?: string;
  /**
  * batching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#batching GoogleProvider#batching}
  */
  readonly batching?: GoogleProviderBatching;
}
export interface GoogleProviderBatching {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#enable_batching GoogleProvider#enable_batching}
  */
  readonly enableBatching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#send_after GoogleProvider#send_after}
  */
  readonly sendAfter?: string;
}

export function googleProviderBatchingToTerraform(struct?: GoogleProviderBatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_batching: cdktf.booleanToTerraform(struct!.enableBatching),
    send_after: cdktf.stringToTerraform(struct!.sendAfter),
  }
}


export function googleProviderBatchingToHclTerraform(struct?: GoogleProviderBatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_batching: {
      value: cdktf.booleanToHclTerraform(struct!.enableBatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_after: {
      value: cdktf.stringToHclTerraform(struct!.sendAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs google}
*/
export class GoogleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleProvider to import
  * @param importFromId The id of the existing GoogleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs google} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.85.0',
        providerVersionConstraint: '~>4.0'
      },
      terraformProviderSource: 'hashicorp/google'
    });
    this._accessApprovalCustomEndpoint = config.accessApprovalCustomEndpoint;
    this._accessContextManagerCustomEndpoint = config.accessContextManagerCustomEndpoint;
    this._accessToken = config.accessToken;
    this._activeDirectoryCustomEndpoint = config.activeDirectoryCustomEndpoint;
    this._alloydbCustomEndpoint = config.alloydbCustomEndpoint;
    this._apigeeCustomEndpoint = config.apigeeCustomEndpoint;
    this._apikeysCustomEndpoint = config.apikeysCustomEndpoint;
    this._appEngineCustomEndpoint = config.appEngineCustomEndpoint;
    this._artifactRegistryCustomEndpoint = config.artifactRegistryCustomEndpoint;
    this._assuredWorkloadsCustomEndpoint = config.assuredWorkloadsCustomEndpoint;
    this._beyondcorpCustomEndpoint = config.beyondcorpCustomEndpoint;
    this._bigQueryCustomEndpoint = config.bigQueryCustomEndpoint;
    this._biglakeCustomEndpoint = config.biglakeCustomEndpoint;
    this._bigqueryAnalyticsHubCustomEndpoint = config.bigqueryAnalyticsHubCustomEndpoint;
    this._bigqueryConnectionCustomEndpoint = config.bigqueryConnectionCustomEndpoint;
    this._bigqueryDataTransferCustomEndpoint = config.bigqueryDataTransferCustomEndpoint;
    this._bigqueryDatapolicyCustomEndpoint = config.bigqueryDatapolicyCustomEndpoint;
    this._bigqueryReservationCustomEndpoint = config.bigqueryReservationCustomEndpoint;
    this._bigtableCustomEndpoint = config.bigtableCustomEndpoint;
    this._billingCustomEndpoint = config.billingCustomEndpoint;
    this._billingProject = config.billingProject;
    this._binaryAuthorizationCustomEndpoint = config.binaryAuthorizationCustomEndpoint;
    this._certificateManagerCustomEndpoint = config.certificateManagerCustomEndpoint;
    this._cloudAssetCustomEndpoint = config.cloudAssetCustomEndpoint;
    this._cloudBillingCustomEndpoint = config.cloudBillingCustomEndpoint;
    this._cloudBuildCustomEndpoint = config.cloudBuildCustomEndpoint;
    this._cloudBuildWorkerPoolCustomEndpoint = config.cloudBuildWorkerPoolCustomEndpoint;
    this._cloudFunctionsCustomEndpoint = config.cloudFunctionsCustomEndpoint;
    this._cloudIdentityCustomEndpoint = config.cloudIdentityCustomEndpoint;
    this._cloudIdsCustomEndpoint = config.cloudIdsCustomEndpoint;
    this._cloudIotCustomEndpoint = config.cloudIotCustomEndpoint;
    this._cloudResourceManagerCustomEndpoint = config.cloudResourceManagerCustomEndpoint;
    this._cloudRunCustomEndpoint = config.cloudRunCustomEndpoint;
    this._cloudRunV2CustomEndpoint = config.cloudRunV2CustomEndpoint;
    this._cloudSchedulerCustomEndpoint = config.cloudSchedulerCustomEndpoint;
    this._cloudTasksCustomEndpoint = config.cloudTasksCustomEndpoint;
    this._cloudbuildv2CustomEndpoint = config.cloudbuildv2CustomEndpoint;
    this._clouddeployCustomEndpoint = config.clouddeployCustomEndpoint;
    this._cloudfunctions2CustomEndpoint = config.cloudfunctions2CustomEndpoint;
    this._composerCustomEndpoint = config.composerCustomEndpoint;
    this._computeCustomEndpoint = config.computeCustomEndpoint;
    this._containerAnalysisCustomEndpoint = config.containerAnalysisCustomEndpoint;
    this._containerAttachedCustomEndpoint = config.containerAttachedCustomEndpoint;
    this._containerAwsCustomEndpoint = config.containerAwsCustomEndpoint;
    this._containerAzureCustomEndpoint = config.containerAzureCustomEndpoint;
    this._containerCustomEndpoint = config.containerCustomEndpoint;
    this._coreBillingCustomEndpoint = config.coreBillingCustomEndpoint;
    this._credentials = config.credentials;
    this._dataCatalogCustomEndpoint = config.dataCatalogCustomEndpoint;
    this._dataFusionCustomEndpoint = config.dataFusionCustomEndpoint;
    this._dataLossPreventionCustomEndpoint = config.dataLossPreventionCustomEndpoint;
    this._dataPipelineCustomEndpoint = config.dataPipelineCustomEndpoint;
    this._databaseMigrationServiceCustomEndpoint = config.databaseMigrationServiceCustomEndpoint;
    this._dataflowCustomEndpoint = config.dataflowCustomEndpoint;
    this._dataplexCustomEndpoint = config.dataplexCustomEndpoint;
    this._dataprocCustomEndpoint = config.dataprocCustomEndpoint;
    this._dataprocMetastoreCustomEndpoint = config.dataprocMetastoreCustomEndpoint;
    this._datastoreCustomEndpoint = config.datastoreCustomEndpoint;
    this._datastreamCustomEndpoint = config.datastreamCustomEndpoint;
    this._deploymentManagerCustomEndpoint = config.deploymentManagerCustomEndpoint;
    this._dialogflowCustomEndpoint = config.dialogflowCustomEndpoint;
    this._dialogflowCxCustomEndpoint = config.dialogflowCxCustomEndpoint;
    this._dnsCustomEndpoint = config.dnsCustomEndpoint;
    this._documentAiCustomEndpoint = config.documentAiCustomEndpoint;
    this._documentAiWarehouseCustomEndpoint = config.documentAiWarehouseCustomEndpoint;
    this._edgenetworkCustomEndpoint = config.edgenetworkCustomEndpoint;
    this._essentialContactsCustomEndpoint = config.essentialContactsCustomEndpoint;
    this._eventarcCustomEndpoint = config.eventarcCustomEndpoint;
    this._filestoreCustomEndpoint = config.filestoreCustomEndpoint;
    this._firebaserulesCustomEndpoint = config.firebaserulesCustomEndpoint;
    this._firestoreCustomEndpoint = config.firestoreCustomEndpoint;
    this._gameServicesCustomEndpoint = config.gameServicesCustomEndpoint;
    this._gkeBackupCustomEndpoint = config.gkeBackupCustomEndpoint;
    this._gkeHub2CustomEndpoint = config.gkeHub2CustomEndpoint;
    this._gkeHubCustomEndpoint = config.gkeHubCustomEndpoint;
    this._gkehubFeatureCustomEndpoint = config.gkehubFeatureCustomEndpoint;
    this._healthcareCustomEndpoint = config.healthcareCustomEndpoint;
    this._iam2CustomEndpoint = config.iam2CustomEndpoint;
    this._iamBetaCustomEndpoint = config.iamBetaCustomEndpoint;
    this._iamCredentialsCustomEndpoint = config.iamCredentialsCustomEndpoint;
    this._iamCustomEndpoint = config.iamCustomEndpoint;
    this._iamWorkforcePoolCustomEndpoint = config.iamWorkforcePoolCustomEndpoint;
    this._iapCustomEndpoint = config.iapCustomEndpoint;
    this._identityPlatformCustomEndpoint = config.identityPlatformCustomEndpoint;
    this._impersonateServiceAccount = config.impersonateServiceAccount;
    this._impersonateServiceAccountDelegates = config.impersonateServiceAccountDelegates;
    this._kmsCustomEndpoint = config.kmsCustomEndpoint;
    this._loggingCustomEndpoint = config.loggingCustomEndpoint;
    this._lookerCustomEndpoint = config.lookerCustomEndpoint;
    this._memcacheCustomEndpoint = config.memcacheCustomEndpoint;
    this._mlEngineCustomEndpoint = config.mlEngineCustomEndpoint;
    this._monitoringCustomEndpoint = config.monitoringCustomEndpoint;
    this._networkConnectivityCustomEndpoint = config.networkConnectivityCustomEndpoint;
    this._networkManagementCustomEndpoint = config.networkManagementCustomEndpoint;
    this._networkSecurityCustomEndpoint = config.networkSecurityCustomEndpoint;
    this._networkServicesCustomEndpoint = config.networkServicesCustomEndpoint;
    this._notebooksCustomEndpoint = config.notebooksCustomEndpoint;
    this._orgPolicyCustomEndpoint = config.orgPolicyCustomEndpoint;
    this._osConfigCustomEndpoint = config.osConfigCustomEndpoint;
    this._osLoginCustomEndpoint = config.osLoginCustomEndpoint;
    this._privatecaCustomEndpoint = config.privatecaCustomEndpoint;
    this._project = config.project;
    this._publicCaCustomEndpoint = config.publicCaCustomEndpoint;
    this._pubsubCustomEndpoint = config.pubsubCustomEndpoint;
    this._pubsubLiteCustomEndpoint = config.pubsubLiteCustomEndpoint;
    this._recaptchaEnterpriseCustomEndpoint = config.recaptchaEnterpriseCustomEndpoint;
    this._redisCustomEndpoint = config.redisCustomEndpoint;
    this._region = config.region;
    this._requestReason = config.requestReason;
    this._requestTimeout = config.requestTimeout;
    this._resourceManagerCustomEndpoint = config.resourceManagerCustomEndpoint;
    this._resourceManagerV3CustomEndpoint = config.resourceManagerV3CustomEndpoint;
    this._scopes = config.scopes;
    this._secretManagerCustomEndpoint = config.secretManagerCustomEndpoint;
    this._securityCenterCustomEndpoint = config.securityCenterCustomEndpoint;
    this._serviceManagementCustomEndpoint = config.serviceManagementCustomEndpoint;
    this._serviceNetworkingCustomEndpoint = config.serviceNetworkingCustomEndpoint;
    this._serviceUsageCustomEndpoint = config.serviceUsageCustomEndpoint;
    this._sourceRepoCustomEndpoint = config.sourceRepoCustomEndpoint;
    this._spannerCustomEndpoint = config.spannerCustomEndpoint;
    this._sqlCustomEndpoint = config.sqlCustomEndpoint;
    this._storageCustomEndpoint = config.storageCustomEndpoint;
    this._storageInsightsCustomEndpoint = config.storageInsightsCustomEndpoint;
    this._storageTransferCustomEndpoint = config.storageTransferCustomEndpoint;
    this._tagsCustomEndpoint = config.tagsCustomEndpoint;
    this._tagsLocationCustomEndpoint = config.tagsLocationCustomEndpoint;
    this._tpuCustomEndpoint = config.tpuCustomEndpoint;
    this._userProjectOverride = config.userProjectOverride;
    this._vertexAiCustomEndpoint = config.vertexAiCustomEndpoint;
    this._vpcAccessCustomEndpoint = config.vpcAccessCustomEndpoint;
    this._workflowsCustomEndpoint = config.workflowsCustomEndpoint;
    this._zone = config.zone;
    this._alias = config.alias;
    this._batching = config.batching;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_approval_custom_endpoint - computed: false, optional: true, required: false
  private _accessApprovalCustomEndpoint?: string; 
  public get accessApprovalCustomEndpoint() {
    return this._accessApprovalCustomEndpoint;
  }
  public set accessApprovalCustomEndpoint(value: string | undefined) {
    this._accessApprovalCustomEndpoint = value;
  }
  public resetAccessApprovalCustomEndpoint() {
    this._accessApprovalCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessApprovalCustomEndpointInput() {
    return this._accessApprovalCustomEndpoint;
  }

  // access_context_manager_custom_endpoint - computed: false, optional: true, required: false
  private _accessContextManagerCustomEndpoint?: string; 
  public get accessContextManagerCustomEndpoint() {
    return this._accessContextManagerCustomEndpoint;
  }
  public set accessContextManagerCustomEndpoint(value: string | undefined) {
    this._accessContextManagerCustomEndpoint = value;
  }
  public resetAccessContextManagerCustomEndpoint() {
    this._accessContextManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessContextManagerCustomEndpointInput() {
    return this._accessContextManagerCustomEndpoint;
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // active_directory_custom_endpoint - computed: false, optional: true, required: false
  private _activeDirectoryCustomEndpoint?: string; 
  public get activeDirectoryCustomEndpoint() {
    return this._activeDirectoryCustomEndpoint;
  }
  public set activeDirectoryCustomEndpoint(value: string | undefined) {
    this._activeDirectoryCustomEndpoint = value;
  }
  public resetActiveDirectoryCustomEndpoint() {
    this._activeDirectoryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryCustomEndpointInput() {
    return this._activeDirectoryCustomEndpoint;
  }

  // alloydb_custom_endpoint - computed: false, optional: true, required: false
  private _alloydbCustomEndpoint?: string; 
  public get alloydbCustomEndpoint() {
    return this._alloydbCustomEndpoint;
  }
  public set alloydbCustomEndpoint(value: string | undefined) {
    this._alloydbCustomEndpoint = value;
  }
  public resetAlloydbCustomEndpoint() {
    this._alloydbCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alloydbCustomEndpointInput() {
    return this._alloydbCustomEndpoint;
  }

  // apigee_custom_endpoint - computed: false, optional: true, required: false
  private _apigeeCustomEndpoint?: string; 
  public get apigeeCustomEndpoint() {
    return this._apigeeCustomEndpoint;
  }
  public set apigeeCustomEndpoint(value: string | undefined) {
    this._apigeeCustomEndpoint = value;
  }
  public resetApigeeCustomEndpoint() {
    this._apigeeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apigeeCustomEndpointInput() {
    return this._apigeeCustomEndpoint;
  }

  // apikeys_custom_endpoint - computed: false, optional: true, required: false
  private _apikeysCustomEndpoint?: string; 
  public get apikeysCustomEndpoint() {
    return this._apikeysCustomEndpoint;
  }
  public set apikeysCustomEndpoint(value: string | undefined) {
    this._apikeysCustomEndpoint = value;
  }
  public resetApikeysCustomEndpoint() {
    this._apikeysCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeysCustomEndpointInput() {
    return this._apikeysCustomEndpoint;
  }

  // app_engine_custom_endpoint - computed: false, optional: true, required: false
  private _appEngineCustomEndpoint?: string; 
  public get appEngineCustomEndpoint() {
    return this._appEngineCustomEndpoint;
  }
  public set appEngineCustomEndpoint(value: string | undefined) {
    this._appEngineCustomEndpoint = value;
  }
  public resetAppEngineCustomEndpoint() {
    this._appEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineCustomEndpointInput() {
    return this._appEngineCustomEndpoint;
  }

  // artifact_registry_custom_endpoint - computed: false, optional: true, required: false
  private _artifactRegistryCustomEndpoint?: string; 
  public get artifactRegistryCustomEndpoint() {
    return this._artifactRegistryCustomEndpoint;
  }
  public set artifactRegistryCustomEndpoint(value: string | undefined) {
    this._artifactRegistryCustomEndpoint = value;
  }
  public resetArtifactRegistryCustomEndpoint() {
    this._artifactRegistryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactRegistryCustomEndpointInput() {
    return this._artifactRegistryCustomEndpoint;
  }

  // assured_workloads_custom_endpoint - computed: false, optional: true, required: false
  private _assuredWorkloadsCustomEndpoint?: string; 
  public get assuredWorkloadsCustomEndpoint() {
    return this._assuredWorkloadsCustomEndpoint;
  }
  public set assuredWorkloadsCustomEndpoint(value: string | undefined) {
    this._assuredWorkloadsCustomEndpoint = value;
  }
  public resetAssuredWorkloadsCustomEndpoint() {
    this._assuredWorkloadsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuredWorkloadsCustomEndpointInput() {
    return this._assuredWorkloadsCustomEndpoint;
  }

  // beyondcorp_custom_endpoint - computed: false, optional: true, required: false
  private _beyondcorpCustomEndpoint?: string; 
  public get beyondcorpCustomEndpoint() {
    return this._beyondcorpCustomEndpoint;
  }
  public set beyondcorpCustomEndpoint(value: string | undefined) {
    this._beyondcorpCustomEndpoint = value;
  }
  public resetBeyondcorpCustomEndpoint() {
    this._beyondcorpCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beyondcorpCustomEndpointInput() {
    return this._beyondcorpCustomEndpoint;
  }

  // big_query_custom_endpoint - computed: false, optional: true, required: false
  private _bigQueryCustomEndpoint?: string; 
  public get bigQueryCustomEndpoint() {
    return this._bigQueryCustomEndpoint;
  }
  public set bigQueryCustomEndpoint(value: string | undefined) {
    this._bigQueryCustomEndpoint = value;
  }
  public resetBigQueryCustomEndpoint() {
    this._bigQueryCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryCustomEndpointInput() {
    return this._bigQueryCustomEndpoint;
  }

  // biglake_custom_endpoint - computed: false, optional: true, required: false
  private _biglakeCustomEndpoint?: string; 
  public get biglakeCustomEndpoint() {
    return this._biglakeCustomEndpoint;
  }
  public set biglakeCustomEndpoint(value: string | undefined) {
    this._biglakeCustomEndpoint = value;
  }
  public resetBiglakeCustomEndpoint() {
    this._biglakeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biglakeCustomEndpointInput() {
    return this._biglakeCustomEndpoint;
  }

  // bigquery_analytics_hub_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryAnalyticsHubCustomEndpoint?: string; 
  public get bigqueryAnalyticsHubCustomEndpoint() {
    return this._bigqueryAnalyticsHubCustomEndpoint;
  }
  public set bigqueryAnalyticsHubCustomEndpoint(value: string | undefined) {
    this._bigqueryAnalyticsHubCustomEndpoint = value;
  }
  public resetBigqueryAnalyticsHubCustomEndpoint() {
    this._bigqueryAnalyticsHubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryAnalyticsHubCustomEndpointInput() {
    return this._bigqueryAnalyticsHubCustomEndpoint;
  }

  // bigquery_connection_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryConnectionCustomEndpoint?: string; 
  public get bigqueryConnectionCustomEndpoint() {
    return this._bigqueryConnectionCustomEndpoint;
  }
  public set bigqueryConnectionCustomEndpoint(value: string | undefined) {
    this._bigqueryConnectionCustomEndpoint = value;
  }
  public resetBigqueryConnectionCustomEndpoint() {
    this._bigqueryConnectionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConnectionCustomEndpointInput() {
    return this._bigqueryConnectionCustomEndpoint;
  }

  // bigquery_data_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDataTransferCustomEndpoint?: string; 
  public get bigqueryDataTransferCustomEndpoint() {
    return this._bigqueryDataTransferCustomEndpoint;
  }
  public set bigqueryDataTransferCustomEndpoint(value: string | undefined) {
    this._bigqueryDataTransferCustomEndpoint = value;
  }
  public resetBigqueryDataTransferCustomEndpoint() {
    this._bigqueryDataTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDataTransferCustomEndpointInput() {
    return this._bigqueryDataTransferCustomEndpoint;
  }

  // bigquery_datapolicy_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryDatapolicyCustomEndpoint?: string; 
  public get bigqueryDatapolicyCustomEndpoint() {
    return this._bigqueryDatapolicyCustomEndpoint;
  }
  public set bigqueryDatapolicyCustomEndpoint(value: string | undefined) {
    this._bigqueryDatapolicyCustomEndpoint = value;
  }
  public resetBigqueryDatapolicyCustomEndpoint() {
    this._bigqueryDatapolicyCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatapolicyCustomEndpointInput() {
    return this._bigqueryDatapolicyCustomEndpoint;
  }

  // bigquery_reservation_custom_endpoint - computed: false, optional: true, required: false
  private _bigqueryReservationCustomEndpoint?: string; 
  public get bigqueryReservationCustomEndpoint() {
    return this._bigqueryReservationCustomEndpoint;
  }
  public set bigqueryReservationCustomEndpoint(value: string | undefined) {
    this._bigqueryReservationCustomEndpoint = value;
  }
  public resetBigqueryReservationCustomEndpoint() {
    this._bigqueryReservationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryReservationCustomEndpointInput() {
    return this._bigqueryReservationCustomEndpoint;
  }

  // bigtable_custom_endpoint - computed: false, optional: true, required: false
  private _bigtableCustomEndpoint?: string; 
  public get bigtableCustomEndpoint() {
    return this._bigtableCustomEndpoint;
  }
  public set bigtableCustomEndpoint(value: string | undefined) {
    this._bigtableCustomEndpoint = value;
  }
  public resetBigtableCustomEndpoint() {
    this._bigtableCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableCustomEndpointInput() {
    return this._bigtableCustomEndpoint;
  }

  // billing_custom_endpoint - computed: false, optional: true, required: false
  private _billingCustomEndpoint?: string; 
  public get billingCustomEndpoint() {
    return this._billingCustomEndpoint;
  }
  public set billingCustomEndpoint(value: string | undefined) {
    this._billingCustomEndpoint = value;
  }
  public resetBillingCustomEndpoint() {
    this._billingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCustomEndpointInput() {
    return this._billingCustomEndpoint;
  }

  // billing_project - computed: false, optional: true, required: false
  private _billingProject?: string; 
  public get billingProject() {
    return this._billingProject;
  }
  public set billingProject(value: string | undefined) {
    this._billingProject = value;
  }
  public resetBillingProject() {
    this._billingProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingProjectInput() {
    return this._billingProject;
  }

  // binary_authorization_custom_endpoint - computed: false, optional: true, required: false
  private _binaryAuthorizationCustomEndpoint?: string; 
  public get binaryAuthorizationCustomEndpoint() {
    return this._binaryAuthorizationCustomEndpoint;
  }
  public set binaryAuthorizationCustomEndpoint(value: string | undefined) {
    this._binaryAuthorizationCustomEndpoint = value;
  }
  public resetBinaryAuthorizationCustomEndpoint() {
    this._binaryAuthorizationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationCustomEndpointInput() {
    return this._binaryAuthorizationCustomEndpoint;
  }

  // certificate_manager_custom_endpoint - computed: false, optional: true, required: false
  private _certificateManagerCustomEndpoint?: string; 
  public get certificateManagerCustomEndpoint() {
    return this._certificateManagerCustomEndpoint;
  }
  public set certificateManagerCustomEndpoint(value: string | undefined) {
    this._certificateManagerCustomEndpoint = value;
  }
  public resetCertificateManagerCustomEndpoint() {
    this._certificateManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagerCustomEndpointInput() {
    return this._certificateManagerCustomEndpoint;
  }

  // cloud_asset_custom_endpoint - computed: false, optional: true, required: false
  private _cloudAssetCustomEndpoint?: string; 
  public get cloudAssetCustomEndpoint() {
    return this._cloudAssetCustomEndpoint;
  }
  public set cloudAssetCustomEndpoint(value: string | undefined) {
    this._cloudAssetCustomEndpoint = value;
  }
  public resetCloudAssetCustomEndpoint() {
    this._cloudAssetCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAssetCustomEndpointInput() {
    return this._cloudAssetCustomEndpoint;
  }

  // cloud_billing_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBillingCustomEndpoint?: string; 
  public get cloudBillingCustomEndpoint() {
    return this._cloudBillingCustomEndpoint;
  }
  public set cloudBillingCustomEndpoint(value: string | undefined) {
    this._cloudBillingCustomEndpoint = value;
  }
  public resetCloudBillingCustomEndpoint() {
    this._cloudBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBillingCustomEndpointInput() {
    return this._cloudBillingCustomEndpoint;
  }

  // cloud_build_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildCustomEndpoint?: string; 
  public get cloudBuildCustomEndpoint() {
    return this._cloudBuildCustomEndpoint;
  }
  public set cloudBuildCustomEndpoint(value: string | undefined) {
    this._cloudBuildCustomEndpoint = value;
  }
  public resetCloudBuildCustomEndpoint() {
    this._cloudBuildCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildCustomEndpointInput() {
    return this._cloudBuildCustomEndpoint;
  }

  // cloud_build_worker_pool_custom_endpoint - computed: false, optional: true, required: false
  private _cloudBuildWorkerPoolCustomEndpoint?: string; 
  public get cloudBuildWorkerPoolCustomEndpoint() {
    return this._cloudBuildWorkerPoolCustomEndpoint;
  }
  public set cloudBuildWorkerPoolCustomEndpoint(value: string | undefined) {
    this._cloudBuildWorkerPoolCustomEndpoint = value;
  }
  public resetCloudBuildWorkerPoolCustomEndpoint() {
    this._cloudBuildWorkerPoolCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBuildWorkerPoolCustomEndpointInput() {
    return this._cloudBuildWorkerPoolCustomEndpoint;
  }

  // cloud_functions_custom_endpoint - computed: false, optional: true, required: false
  private _cloudFunctionsCustomEndpoint?: string; 
  public get cloudFunctionsCustomEndpoint() {
    return this._cloudFunctionsCustomEndpoint;
  }
  public set cloudFunctionsCustomEndpoint(value: string | undefined) {
    this._cloudFunctionsCustomEndpoint = value;
  }
  public resetCloudFunctionsCustomEndpoint() {
    this._cloudFunctionsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionsCustomEndpointInput() {
    return this._cloudFunctionsCustomEndpoint;
  }

  // cloud_identity_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdentityCustomEndpoint?: string; 
  public get cloudIdentityCustomEndpoint() {
    return this._cloudIdentityCustomEndpoint;
  }
  public set cloudIdentityCustomEndpoint(value: string | undefined) {
    this._cloudIdentityCustomEndpoint = value;
  }
  public resetCloudIdentityCustomEndpoint() {
    this._cloudIdentityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdentityCustomEndpointInput() {
    return this._cloudIdentityCustomEndpoint;
  }

  // cloud_ids_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIdsCustomEndpoint?: string; 
  public get cloudIdsCustomEndpoint() {
    return this._cloudIdsCustomEndpoint;
  }
  public set cloudIdsCustomEndpoint(value: string | undefined) {
    this._cloudIdsCustomEndpoint = value;
  }
  public resetCloudIdsCustomEndpoint() {
    this._cloudIdsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdsCustomEndpointInput() {
    return this._cloudIdsCustomEndpoint;
  }

  // cloud_iot_custom_endpoint - computed: false, optional: true, required: false
  private _cloudIotCustomEndpoint?: string; 
  public get cloudIotCustomEndpoint() {
    return this._cloudIotCustomEndpoint;
  }
  public set cloudIotCustomEndpoint(value: string | undefined) {
    this._cloudIotCustomEndpoint = value;
  }
  public resetCloudIotCustomEndpoint() {
    this._cloudIotCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIotCustomEndpointInput() {
    return this._cloudIotCustomEndpoint;
  }

  // cloud_resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _cloudResourceManagerCustomEndpoint?: string; 
  public get cloudResourceManagerCustomEndpoint() {
    return this._cloudResourceManagerCustomEndpoint;
  }
  public set cloudResourceManagerCustomEndpoint(value: string | undefined) {
    this._cloudResourceManagerCustomEndpoint = value;
  }
  public resetCloudResourceManagerCustomEndpoint() {
    this._cloudResourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceManagerCustomEndpointInput() {
    return this._cloudResourceManagerCustomEndpoint;
  }

  // cloud_run_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunCustomEndpoint?: string; 
  public get cloudRunCustomEndpoint() {
    return this._cloudRunCustomEndpoint;
  }
  public set cloudRunCustomEndpoint(value: string | undefined) {
    this._cloudRunCustomEndpoint = value;
  }
  public resetCloudRunCustomEndpoint() {
    this._cloudRunCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunCustomEndpointInput() {
    return this._cloudRunCustomEndpoint;
  }

  // cloud_run_v2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudRunV2CustomEndpoint?: string; 
  public get cloudRunV2CustomEndpoint() {
    return this._cloudRunV2CustomEndpoint;
  }
  public set cloudRunV2CustomEndpoint(value: string | undefined) {
    this._cloudRunV2CustomEndpoint = value;
  }
  public resetCloudRunV2CustomEndpoint() {
    this._cloudRunV2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunV2CustomEndpointInput() {
    return this._cloudRunV2CustomEndpoint;
  }

  // cloud_scheduler_custom_endpoint - computed: false, optional: true, required: false
  private _cloudSchedulerCustomEndpoint?: string; 
  public get cloudSchedulerCustomEndpoint() {
    return this._cloudSchedulerCustomEndpoint;
  }
  public set cloudSchedulerCustomEndpoint(value: string | undefined) {
    this._cloudSchedulerCustomEndpoint = value;
  }
  public resetCloudSchedulerCustomEndpoint() {
    this._cloudSchedulerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSchedulerCustomEndpointInput() {
    return this._cloudSchedulerCustomEndpoint;
  }

  // cloud_tasks_custom_endpoint - computed: false, optional: true, required: false
  private _cloudTasksCustomEndpoint?: string; 
  public get cloudTasksCustomEndpoint() {
    return this._cloudTasksCustomEndpoint;
  }
  public set cloudTasksCustomEndpoint(value: string | undefined) {
    this._cloudTasksCustomEndpoint = value;
  }
  public resetCloudTasksCustomEndpoint() {
    this._cloudTasksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTasksCustomEndpointInput() {
    return this._cloudTasksCustomEndpoint;
  }

  // cloudbuildv2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudbuildv2CustomEndpoint?: string; 
  public get cloudbuildv2CustomEndpoint() {
    return this._cloudbuildv2CustomEndpoint;
  }
  public set cloudbuildv2CustomEndpoint(value: string | undefined) {
    this._cloudbuildv2CustomEndpoint = value;
  }
  public resetCloudbuildv2CustomEndpoint() {
    this._cloudbuildv2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudbuildv2CustomEndpointInput() {
    return this._cloudbuildv2CustomEndpoint;
  }

  // clouddeploy_custom_endpoint - computed: false, optional: true, required: false
  private _clouddeployCustomEndpoint?: string; 
  public get clouddeployCustomEndpoint() {
    return this._clouddeployCustomEndpoint;
  }
  public set clouddeployCustomEndpoint(value: string | undefined) {
    this._clouddeployCustomEndpoint = value;
  }
  public resetClouddeployCustomEndpoint() {
    this._clouddeployCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clouddeployCustomEndpointInput() {
    return this._clouddeployCustomEndpoint;
  }

  // cloudfunctions2_custom_endpoint - computed: false, optional: true, required: false
  private _cloudfunctions2CustomEndpoint?: string; 
  public get cloudfunctions2CustomEndpoint() {
    return this._cloudfunctions2CustomEndpoint;
  }
  public set cloudfunctions2CustomEndpoint(value: string | undefined) {
    this._cloudfunctions2CustomEndpoint = value;
  }
  public resetCloudfunctions2CustomEndpoint() {
    this._cloudfunctions2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudfunctions2CustomEndpointInput() {
    return this._cloudfunctions2CustomEndpoint;
  }

  // composer_custom_endpoint - computed: false, optional: true, required: false
  private _composerCustomEndpoint?: string; 
  public get composerCustomEndpoint() {
    return this._composerCustomEndpoint;
  }
  public set composerCustomEndpoint(value: string | undefined) {
    this._composerCustomEndpoint = value;
  }
  public resetComposerCustomEndpoint() {
    this._composerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get composerCustomEndpointInput() {
    return this._composerCustomEndpoint;
  }

  // compute_custom_endpoint - computed: false, optional: true, required: false
  private _computeCustomEndpoint?: string; 
  public get computeCustomEndpoint() {
    return this._computeCustomEndpoint;
  }
  public set computeCustomEndpoint(value: string | undefined) {
    this._computeCustomEndpoint = value;
  }
  public resetComputeCustomEndpoint() {
    this._computeCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCustomEndpointInput() {
    return this._computeCustomEndpoint;
  }

  // container_analysis_custom_endpoint - computed: false, optional: true, required: false
  private _containerAnalysisCustomEndpoint?: string; 
  public get containerAnalysisCustomEndpoint() {
    return this._containerAnalysisCustomEndpoint;
  }
  public set containerAnalysisCustomEndpoint(value: string | undefined) {
    this._containerAnalysisCustomEndpoint = value;
  }
  public resetContainerAnalysisCustomEndpoint() {
    this._containerAnalysisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAnalysisCustomEndpointInput() {
    return this._containerAnalysisCustomEndpoint;
  }

  // container_attached_custom_endpoint - computed: false, optional: true, required: false
  private _containerAttachedCustomEndpoint?: string; 
  public get containerAttachedCustomEndpoint() {
    return this._containerAttachedCustomEndpoint;
  }
  public set containerAttachedCustomEndpoint(value: string | undefined) {
    this._containerAttachedCustomEndpoint = value;
  }
  public resetContainerAttachedCustomEndpoint() {
    this._containerAttachedCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAttachedCustomEndpointInput() {
    return this._containerAttachedCustomEndpoint;
  }

  // container_aws_custom_endpoint - computed: false, optional: true, required: false
  private _containerAwsCustomEndpoint?: string; 
  public get containerAwsCustomEndpoint() {
    return this._containerAwsCustomEndpoint;
  }
  public set containerAwsCustomEndpoint(value: string | undefined) {
    this._containerAwsCustomEndpoint = value;
  }
  public resetContainerAwsCustomEndpoint() {
    this._containerAwsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAwsCustomEndpointInput() {
    return this._containerAwsCustomEndpoint;
  }

  // container_azure_custom_endpoint - computed: false, optional: true, required: false
  private _containerAzureCustomEndpoint?: string; 
  public get containerAzureCustomEndpoint() {
    return this._containerAzureCustomEndpoint;
  }
  public set containerAzureCustomEndpoint(value: string | undefined) {
    this._containerAzureCustomEndpoint = value;
  }
  public resetContainerAzureCustomEndpoint() {
    this._containerAzureCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAzureCustomEndpointInput() {
    return this._containerAzureCustomEndpoint;
  }

  // container_custom_endpoint - computed: false, optional: true, required: false
  private _containerCustomEndpoint?: string; 
  public get containerCustomEndpoint() {
    return this._containerCustomEndpoint;
  }
  public set containerCustomEndpoint(value: string | undefined) {
    this._containerCustomEndpoint = value;
  }
  public resetContainerCustomEndpoint() {
    this._containerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCustomEndpointInput() {
    return this._containerCustomEndpoint;
  }

  // core_billing_custom_endpoint - computed: false, optional: true, required: false
  private _coreBillingCustomEndpoint?: string; 
  public get coreBillingCustomEndpoint() {
    return this._coreBillingCustomEndpoint;
  }
  public set coreBillingCustomEndpoint(value: string | undefined) {
    this._coreBillingCustomEndpoint = value;
  }
  public resetCoreBillingCustomEndpoint() {
    this._coreBillingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreBillingCustomEndpointInput() {
    return this._coreBillingCustomEndpoint;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: string | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // data_catalog_custom_endpoint - computed: false, optional: true, required: false
  private _dataCatalogCustomEndpoint?: string; 
  public get dataCatalogCustomEndpoint() {
    return this._dataCatalogCustomEndpoint;
  }
  public set dataCatalogCustomEndpoint(value: string | undefined) {
    this._dataCatalogCustomEndpoint = value;
  }
  public resetDataCatalogCustomEndpoint() {
    this._dataCatalogCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogCustomEndpointInput() {
    return this._dataCatalogCustomEndpoint;
  }

  // data_fusion_custom_endpoint - computed: false, optional: true, required: false
  private _dataFusionCustomEndpoint?: string; 
  public get dataFusionCustomEndpoint() {
    return this._dataFusionCustomEndpoint;
  }
  public set dataFusionCustomEndpoint(value: string | undefined) {
    this._dataFusionCustomEndpoint = value;
  }
  public resetDataFusionCustomEndpoint() {
    this._dataFusionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFusionCustomEndpointInput() {
    return this._dataFusionCustomEndpoint;
  }

  // data_loss_prevention_custom_endpoint - computed: false, optional: true, required: false
  private _dataLossPreventionCustomEndpoint?: string; 
  public get dataLossPreventionCustomEndpoint() {
    return this._dataLossPreventionCustomEndpoint;
  }
  public set dataLossPreventionCustomEndpoint(value: string | undefined) {
    this._dataLossPreventionCustomEndpoint = value;
  }
  public resetDataLossPreventionCustomEndpoint() {
    this._dataLossPreventionCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionCustomEndpointInput() {
    return this._dataLossPreventionCustomEndpoint;
  }

  // data_pipeline_custom_endpoint - computed: false, optional: true, required: false
  private _dataPipelineCustomEndpoint?: string; 
  public get dataPipelineCustomEndpoint() {
    return this._dataPipelineCustomEndpoint;
  }
  public set dataPipelineCustomEndpoint(value: string | undefined) {
    this._dataPipelineCustomEndpoint = value;
  }
  public resetDataPipelineCustomEndpoint() {
    this._dataPipelineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPipelineCustomEndpointInput() {
    return this._dataPipelineCustomEndpoint;
  }

  // database_migration_service_custom_endpoint - computed: false, optional: true, required: false
  private _databaseMigrationServiceCustomEndpoint?: string; 
  public get databaseMigrationServiceCustomEndpoint() {
    return this._databaseMigrationServiceCustomEndpoint;
  }
  public set databaseMigrationServiceCustomEndpoint(value: string | undefined) {
    this._databaseMigrationServiceCustomEndpoint = value;
  }
  public resetDatabaseMigrationServiceCustomEndpoint() {
    this._databaseMigrationServiceCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseMigrationServiceCustomEndpointInput() {
    return this._databaseMigrationServiceCustomEndpoint;
  }

  // dataflow_custom_endpoint - computed: false, optional: true, required: false
  private _dataflowCustomEndpoint?: string; 
  public get dataflowCustomEndpoint() {
    return this._dataflowCustomEndpoint;
  }
  public set dataflowCustomEndpoint(value: string | undefined) {
    this._dataflowCustomEndpoint = value;
  }
  public resetDataflowCustomEndpoint() {
    this._dataflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowCustomEndpointInput() {
    return this._dataflowCustomEndpoint;
  }

  // dataplex_custom_endpoint - computed: false, optional: true, required: false
  private _dataplexCustomEndpoint?: string; 
  public get dataplexCustomEndpoint() {
    return this._dataplexCustomEndpoint;
  }
  public set dataplexCustomEndpoint(value: string | undefined) {
    this._dataplexCustomEndpoint = value;
  }
  public resetDataplexCustomEndpoint() {
    this._dataplexCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplexCustomEndpointInput() {
    return this._dataplexCustomEndpoint;
  }

  // dataproc_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocCustomEndpoint?: string; 
  public get dataprocCustomEndpoint() {
    return this._dataprocCustomEndpoint;
  }
  public set dataprocCustomEndpoint(value: string | undefined) {
    this._dataprocCustomEndpoint = value;
  }
  public resetDataprocCustomEndpoint() {
    this._dataprocCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocCustomEndpointInput() {
    return this._dataprocCustomEndpoint;
  }

  // dataproc_metastore_custom_endpoint - computed: false, optional: true, required: false
  private _dataprocMetastoreCustomEndpoint?: string; 
  public get dataprocMetastoreCustomEndpoint() {
    return this._dataprocMetastoreCustomEndpoint;
  }
  public set dataprocMetastoreCustomEndpoint(value: string | undefined) {
    this._dataprocMetastoreCustomEndpoint = value;
  }
  public resetDataprocMetastoreCustomEndpoint() {
    this._dataprocMetastoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocMetastoreCustomEndpointInput() {
    return this._dataprocMetastoreCustomEndpoint;
  }

  // datastore_custom_endpoint - computed: false, optional: true, required: false
  private _datastoreCustomEndpoint?: string; 
  public get datastoreCustomEndpoint() {
    return this._datastoreCustomEndpoint;
  }
  public set datastoreCustomEndpoint(value: string | undefined) {
    this._datastoreCustomEndpoint = value;
  }
  public resetDatastoreCustomEndpoint() {
    this._datastoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreCustomEndpointInput() {
    return this._datastoreCustomEndpoint;
  }

  // datastream_custom_endpoint - computed: false, optional: true, required: false
  private _datastreamCustomEndpoint?: string; 
  public get datastreamCustomEndpoint() {
    return this._datastreamCustomEndpoint;
  }
  public set datastreamCustomEndpoint(value: string | undefined) {
    this._datastreamCustomEndpoint = value;
  }
  public resetDatastreamCustomEndpoint() {
    this._datastreamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastreamCustomEndpointInput() {
    return this._datastreamCustomEndpoint;
  }

  // deployment_manager_custom_endpoint - computed: false, optional: true, required: false
  private _deploymentManagerCustomEndpoint?: string; 
  public get deploymentManagerCustomEndpoint() {
    return this._deploymentManagerCustomEndpoint;
  }
  public set deploymentManagerCustomEndpoint(value: string | undefined) {
    this._deploymentManagerCustomEndpoint = value;
  }
  public resetDeploymentManagerCustomEndpoint() {
    this._deploymentManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentManagerCustomEndpointInput() {
    return this._deploymentManagerCustomEndpoint;
  }

  // dialogflow_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCustomEndpoint?: string; 
  public get dialogflowCustomEndpoint() {
    return this._dialogflowCustomEndpoint;
  }
  public set dialogflowCustomEndpoint(value: string | undefined) {
    this._dialogflowCustomEndpoint = value;
  }
  public resetDialogflowCustomEndpoint() {
    this._dialogflowCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCustomEndpointInput() {
    return this._dialogflowCustomEndpoint;
  }

  // dialogflow_cx_custom_endpoint - computed: false, optional: true, required: false
  private _dialogflowCxCustomEndpoint?: string; 
  public get dialogflowCxCustomEndpoint() {
    return this._dialogflowCxCustomEndpoint;
  }
  public set dialogflowCxCustomEndpoint(value: string | undefined) {
    this._dialogflowCxCustomEndpoint = value;
  }
  public resetDialogflowCxCustomEndpoint() {
    this._dialogflowCxCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialogflowCxCustomEndpointInput() {
    return this._dialogflowCxCustomEndpoint;
  }

  // dns_custom_endpoint - computed: false, optional: true, required: false
  private _dnsCustomEndpoint?: string; 
  public get dnsCustomEndpoint() {
    return this._dnsCustomEndpoint;
  }
  public set dnsCustomEndpoint(value: string | undefined) {
    this._dnsCustomEndpoint = value;
  }
  public resetDnsCustomEndpoint() {
    this._dnsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCustomEndpointInput() {
    return this._dnsCustomEndpoint;
  }

  // document_ai_custom_endpoint - computed: false, optional: true, required: false
  private _documentAiCustomEndpoint?: string; 
  public get documentAiCustomEndpoint() {
    return this._documentAiCustomEndpoint;
  }
  public set documentAiCustomEndpoint(value: string | undefined) {
    this._documentAiCustomEndpoint = value;
  }
  public resetDocumentAiCustomEndpoint() {
    this._documentAiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAiCustomEndpointInput() {
    return this._documentAiCustomEndpoint;
  }

  // document_ai_warehouse_custom_endpoint - computed: false, optional: true, required: false
  private _documentAiWarehouseCustomEndpoint?: string; 
  public get documentAiWarehouseCustomEndpoint() {
    return this._documentAiWarehouseCustomEndpoint;
  }
  public set documentAiWarehouseCustomEndpoint(value: string | undefined) {
    this._documentAiWarehouseCustomEndpoint = value;
  }
  public resetDocumentAiWarehouseCustomEndpoint() {
    this._documentAiWarehouseCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentAiWarehouseCustomEndpointInput() {
    return this._documentAiWarehouseCustomEndpoint;
  }

  // edgenetwork_custom_endpoint - computed: false, optional: true, required: false
  private _edgenetworkCustomEndpoint?: string; 
  public get edgenetworkCustomEndpoint() {
    return this._edgenetworkCustomEndpoint;
  }
  public set edgenetworkCustomEndpoint(value: string | undefined) {
    this._edgenetworkCustomEndpoint = value;
  }
  public resetEdgenetworkCustomEndpoint() {
    this._edgenetworkCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgenetworkCustomEndpointInput() {
    return this._edgenetworkCustomEndpoint;
  }

  // essential_contacts_custom_endpoint - computed: false, optional: true, required: false
  private _essentialContactsCustomEndpoint?: string; 
  public get essentialContactsCustomEndpoint() {
    return this._essentialContactsCustomEndpoint;
  }
  public set essentialContactsCustomEndpoint(value: string | undefined) {
    this._essentialContactsCustomEndpoint = value;
  }
  public resetEssentialContactsCustomEndpoint() {
    this._essentialContactsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get essentialContactsCustomEndpointInput() {
    return this._essentialContactsCustomEndpoint;
  }

  // eventarc_custom_endpoint - computed: false, optional: true, required: false
  private _eventarcCustomEndpoint?: string; 
  public get eventarcCustomEndpoint() {
    return this._eventarcCustomEndpoint;
  }
  public set eventarcCustomEndpoint(value: string | undefined) {
    this._eventarcCustomEndpoint = value;
  }
  public resetEventarcCustomEndpoint() {
    this._eventarcCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventarcCustomEndpointInput() {
    return this._eventarcCustomEndpoint;
  }

  // filestore_custom_endpoint - computed: false, optional: true, required: false
  private _filestoreCustomEndpoint?: string; 
  public get filestoreCustomEndpoint() {
    return this._filestoreCustomEndpoint;
  }
  public set filestoreCustomEndpoint(value: string | undefined) {
    this._filestoreCustomEndpoint = value;
  }
  public resetFilestoreCustomEndpoint() {
    this._filestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filestoreCustomEndpointInput() {
    return this._filestoreCustomEndpoint;
  }

  // firebaserules_custom_endpoint - computed: false, optional: true, required: false
  private _firebaserulesCustomEndpoint?: string; 
  public get firebaserulesCustomEndpoint() {
    return this._firebaserulesCustomEndpoint;
  }
  public set firebaserulesCustomEndpoint(value: string | undefined) {
    this._firebaserulesCustomEndpoint = value;
  }
  public resetFirebaserulesCustomEndpoint() {
    this._firebaserulesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firebaserulesCustomEndpointInput() {
    return this._firebaserulesCustomEndpoint;
  }

  // firestore_custom_endpoint - computed: false, optional: true, required: false
  private _firestoreCustomEndpoint?: string; 
  public get firestoreCustomEndpoint() {
    return this._firestoreCustomEndpoint;
  }
  public set firestoreCustomEndpoint(value: string | undefined) {
    this._firestoreCustomEndpoint = value;
  }
  public resetFirestoreCustomEndpoint() {
    this._firestoreCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firestoreCustomEndpointInput() {
    return this._firestoreCustomEndpoint;
  }

  // game_services_custom_endpoint - computed: false, optional: true, required: false
  private _gameServicesCustomEndpoint?: string; 
  public get gameServicesCustomEndpoint() {
    return this._gameServicesCustomEndpoint;
  }
  public set gameServicesCustomEndpoint(value: string | undefined) {
    this._gameServicesCustomEndpoint = value;
  }
  public resetGameServicesCustomEndpoint() {
    this._gameServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServicesCustomEndpointInput() {
    return this._gameServicesCustomEndpoint;
  }

  // gke_backup_custom_endpoint - computed: false, optional: true, required: false
  private _gkeBackupCustomEndpoint?: string; 
  public get gkeBackupCustomEndpoint() {
    return this._gkeBackupCustomEndpoint;
  }
  public set gkeBackupCustomEndpoint(value: string | undefined) {
    this._gkeBackupCustomEndpoint = value;
  }
  public resetGkeBackupCustomEndpoint() {
    this._gkeBackupCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeBackupCustomEndpointInput() {
    return this._gkeBackupCustomEndpoint;
  }

  // gke_hub2_custom_endpoint - computed: false, optional: true, required: false
  private _gkeHub2CustomEndpoint?: string; 
  public get gkeHub2CustomEndpoint() {
    return this._gkeHub2CustomEndpoint;
  }
  public set gkeHub2CustomEndpoint(value: string | undefined) {
    this._gkeHub2CustomEndpoint = value;
  }
  public resetGkeHub2CustomEndpoint() {
    this._gkeHub2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeHub2CustomEndpointInput() {
    return this._gkeHub2CustomEndpoint;
  }

  // gke_hub_custom_endpoint - computed: false, optional: true, required: false
  private _gkeHubCustomEndpoint?: string; 
  public get gkeHubCustomEndpoint() {
    return this._gkeHubCustomEndpoint;
  }
  public set gkeHubCustomEndpoint(value: string | undefined) {
    this._gkeHubCustomEndpoint = value;
  }
  public resetGkeHubCustomEndpoint() {
    this._gkeHubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeHubCustomEndpointInput() {
    return this._gkeHubCustomEndpoint;
  }

  // gkehub_feature_custom_endpoint - computed: false, optional: true, required: false
  private _gkehubFeatureCustomEndpoint?: string; 
  public get gkehubFeatureCustomEndpoint() {
    return this._gkehubFeatureCustomEndpoint;
  }
  public set gkehubFeatureCustomEndpoint(value: string | undefined) {
    this._gkehubFeatureCustomEndpoint = value;
  }
  public resetGkehubFeatureCustomEndpoint() {
    this._gkehubFeatureCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkehubFeatureCustomEndpointInput() {
    return this._gkehubFeatureCustomEndpoint;
  }

  // healthcare_custom_endpoint - computed: false, optional: true, required: false
  private _healthcareCustomEndpoint?: string; 
  public get healthcareCustomEndpoint() {
    return this._healthcareCustomEndpoint;
  }
  public set healthcareCustomEndpoint(value: string | undefined) {
    this._healthcareCustomEndpoint = value;
  }
  public resetHealthcareCustomEndpoint() {
    this._healthcareCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcareCustomEndpointInput() {
    return this._healthcareCustomEndpoint;
  }

  // iam2_custom_endpoint - computed: false, optional: true, required: false
  private _iam2CustomEndpoint?: string; 
  public get iam2CustomEndpoint() {
    return this._iam2CustomEndpoint;
  }
  public set iam2CustomEndpoint(value: string | undefined) {
    this._iam2CustomEndpoint = value;
  }
  public resetIam2CustomEndpoint() {
    this._iam2CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iam2CustomEndpointInput() {
    return this._iam2CustomEndpoint;
  }

  // iam_beta_custom_endpoint - computed: false, optional: true, required: false
  private _iamBetaCustomEndpoint?: string; 
  public get iamBetaCustomEndpoint() {
    return this._iamBetaCustomEndpoint;
  }
  public set iamBetaCustomEndpoint(value: string | undefined) {
    this._iamBetaCustomEndpoint = value;
  }
  public resetIamBetaCustomEndpoint() {
    this._iamBetaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamBetaCustomEndpointInput() {
    return this._iamBetaCustomEndpoint;
  }

  // iam_credentials_custom_endpoint - computed: false, optional: true, required: false
  private _iamCredentialsCustomEndpoint?: string; 
  public get iamCredentialsCustomEndpoint() {
    return this._iamCredentialsCustomEndpoint;
  }
  public set iamCredentialsCustomEndpoint(value: string | undefined) {
    this._iamCredentialsCustomEndpoint = value;
  }
  public resetIamCredentialsCustomEndpoint() {
    this._iamCredentialsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCredentialsCustomEndpointInput() {
    return this._iamCredentialsCustomEndpoint;
  }

  // iam_custom_endpoint - computed: false, optional: true, required: false
  private _iamCustomEndpoint?: string; 
  public get iamCustomEndpoint() {
    return this._iamCustomEndpoint;
  }
  public set iamCustomEndpoint(value: string | undefined) {
    this._iamCustomEndpoint = value;
  }
  public resetIamCustomEndpoint() {
    this._iamCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamCustomEndpointInput() {
    return this._iamCustomEndpoint;
  }

  // iam_workforce_pool_custom_endpoint - computed: false, optional: true, required: false
  private _iamWorkforcePoolCustomEndpoint?: string; 
  public get iamWorkforcePoolCustomEndpoint() {
    return this._iamWorkforcePoolCustomEndpoint;
  }
  public set iamWorkforcePoolCustomEndpoint(value: string | undefined) {
    this._iamWorkforcePoolCustomEndpoint = value;
  }
  public resetIamWorkforcePoolCustomEndpoint() {
    this._iamWorkforcePoolCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamWorkforcePoolCustomEndpointInput() {
    return this._iamWorkforcePoolCustomEndpoint;
  }

  // iap_custom_endpoint - computed: false, optional: true, required: false
  private _iapCustomEndpoint?: string; 
  public get iapCustomEndpoint() {
    return this._iapCustomEndpoint;
  }
  public set iapCustomEndpoint(value: string | undefined) {
    this._iapCustomEndpoint = value;
  }
  public resetIapCustomEndpoint() {
    this._iapCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iapCustomEndpointInput() {
    return this._iapCustomEndpoint;
  }

  // identity_platform_custom_endpoint - computed: false, optional: true, required: false
  private _identityPlatformCustomEndpoint?: string; 
  public get identityPlatformCustomEndpoint() {
    return this._identityPlatformCustomEndpoint;
  }
  public set identityPlatformCustomEndpoint(value: string | undefined) {
    this._identityPlatformCustomEndpoint = value;
  }
  public resetIdentityPlatformCustomEndpoint() {
    this._identityPlatformCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPlatformCustomEndpointInput() {
    return this._identityPlatformCustomEndpoint;
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: string; 
  public get impersonateServiceAccount() {
    return this._impersonateServiceAccount;
  }
  public set impersonateServiceAccount(value: string | undefined) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // impersonate_service_account_delegates - computed: false, optional: true, required: false
  private _impersonateServiceAccountDelegates?: string[]; 
  public get impersonateServiceAccountDelegates() {
    return this._impersonateServiceAccountDelegates;
  }
  public set impersonateServiceAccountDelegates(value: string[] | undefined) {
    this._impersonateServiceAccountDelegates = value;
  }
  public resetImpersonateServiceAccountDelegates() {
    this._impersonateServiceAccountDelegates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountDelegatesInput() {
    return this._impersonateServiceAccountDelegates;
  }

  // kms_custom_endpoint - computed: false, optional: true, required: false
  private _kmsCustomEndpoint?: string; 
  public get kmsCustomEndpoint() {
    return this._kmsCustomEndpoint;
  }
  public set kmsCustomEndpoint(value: string | undefined) {
    this._kmsCustomEndpoint = value;
  }
  public resetKmsCustomEndpoint() {
    this._kmsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsCustomEndpointInput() {
    return this._kmsCustomEndpoint;
  }

  // logging_custom_endpoint - computed: false, optional: true, required: false
  private _loggingCustomEndpoint?: string; 
  public get loggingCustomEndpoint() {
    return this._loggingCustomEndpoint;
  }
  public set loggingCustomEndpoint(value: string | undefined) {
    this._loggingCustomEndpoint = value;
  }
  public resetLoggingCustomEndpoint() {
    this._loggingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingCustomEndpointInput() {
    return this._loggingCustomEndpoint;
  }

  // looker_custom_endpoint - computed: false, optional: true, required: false
  private _lookerCustomEndpoint?: string; 
  public get lookerCustomEndpoint() {
    return this._lookerCustomEndpoint;
  }
  public set lookerCustomEndpoint(value: string | undefined) {
    this._lookerCustomEndpoint = value;
  }
  public resetLookerCustomEndpoint() {
    this._lookerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookerCustomEndpointInput() {
    return this._lookerCustomEndpoint;
  }

  // memcache_custom_endpoint - computed: false, optional: true, required: false
  private _memcacheCustomEndpoint?: string; 
  public get memcacheCustomEndpoint() {
    return this._memcacheCustomEndpoint;
  }
  public set memcacheCustomEndpoint(value: string | undefined) {
    this._memcacheCustomEndpoint = value;
  }
  public resetMemcacheCustomEndpoint() {
    this._memcacheCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memcacheCustomEndpointInput() {
    return this._memcacheCustomEndpoint;
  }

  // ml_engine_custom_endpoint - computed: false, optional: true, required: false
  private _mlEngineCustomEndpoint?: string; 
  public get mlEngineCustomEndpoint() {
    return this._mlEngineCustomEndpoint;
  }
  public set mlEngineCustomEndpoint(value: string | undefined) {
    this._mlEngineCustomEndpoint = value;
  }
  public resetMlEngineCustomEndpoint() {
    this._mlEngineCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlEngineCustomEndpointInput() {
    return this._mlEngineCustomEndpoint;
  }

  // monitoring_custom_endpoint - computed: false, optional: true, required: false
  private _monitoringCustomEndpoint?: string; 
  public get monitoringCustomEndpoint() {
    return this._monitoringCustomEndpoint;
  }
  public set monitoringCustomEndpoint(value: string | undefined) {
    this._monitoringCustomEndpoint = value;
  }
  public resetMonitoringCustomEndpoint() {
    this._monitoringCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringCustomEndpointInput() {
    return this._monitoringCustomEndpoint;
  }

  // network_connectivity_custom_endpoint - computed: false, optional: true, required: false
  private _networkConnectivityCustomEndpoint?: string; 
  public get networkConnectivityCustomEndpoint() {
    return this._networkConnectivityCustomEndpoint;
  }
  public set networkConnectivityCustomEndpoint(value: string | undefined) {
    this._networkConnectivityCustomEndpoint = value;
  }
  public resetNetworkConnectivityCustomEndpoint() {
    this._networkConnectivityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectivityCustomEndpointInput() {
    return this._networkConnectivityCustomEndpoint;
  }

  // network_management_custom_endpoint - computed: false, optional: true, required: false
  private _networkManagementCustomEndpoint?: string; 
  public get networkManagementCustomEndpoint() {
    return this._networkManagementCustomEndpoint;
  }
  public set networkManagementCustomEndpoint(value: string | undefined) {
    this._networkManagementCustomEndpoint = value;
  }
  public resetNetworkManagementCustomEndpoint() {
    this._networkManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkManagementCustomEndpointInput() {
    return this._networkManagementCustomEndpoint;
  }

  // network_security_custom_endpoint - computed: false, optional: true, required: false
  private _networkSecurityCustomEndpoint?: string; 
  public get networkSecurityCustomEndpoint() {
    return this._networkSecurityCustomEndpoint;
  }
  public set networkSecurityCustomEndpoint(value: string | undefined) {
    this._networkSecurityCustomEndpoint = value;
  }
  public resetNetworkSecurityCustomEndpoint() {
    this._networkSecurityCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSecurityCustomEndpointInput() {
    return this._networkSecurityCustomEndpoint;
  }

  // network_services_custom_endpoint - computed: false, optional: true, required: false
  private _networkServicesCustomEndpoint?: string; 
  public get networkServicesCustomEndpoint() {
    return this._networkServicesCustomEndpoint;
  }
  public set networkServicesCustomEndpoint(value: string | undefined) {
    this._networkServicesCustomEndpoint = value;
  }
  public resetNetworkServicesCustomEndpoint() {
    this._networkServicesCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkServicesCustomEndpointInput() {
    return this._networkServicesCustomEndpoint;
  }

  // notebooks_custom_endpoint - computed: false, optional: true, required: false
  private _notebooksCustomEndpoint?: string; 
  public get notebooksCustomEndpoint() {
    return this._notebooksCustomEndpoint;
  }
  public set notebooksCustomEndpoint(value: string | undefined) {
    this._notebooksCustomEndpoint = value;
  }
  public resetNotebooksCustomEndpoint() {
    this._notebooksCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebooksCustomEndpointInput() {
    return this._notebooksCustomEndpoint;
  }

  // org_policy_custom_endpoint - computed: false, optional: true, required: false
  private _orgPolicyCustomEndpoint?: string; 
  public get orgPolicyCustomEndpoint() {
    return this._orgPolicyCustomEndpoint;
  }
  public set orgPolicyCustomEndpoint(value: string | undefined) {
    this._orgPolicyCustomEndpoint = value;
  }
  public resetOrgPolicyCustomEndpoint() {
    this._orgPolicyCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgPolicyCustomEndpointInput() {
    return this._orgPolicyCustomEndpoint;
  }

  // os_config_custom_endpoint - computed: false, optional: true, required: false
  private _osConfigCustomEndpoint?: string; 
  public get osConfigCustomEndpoint() {
    return this._osConfigCustomEndpoint;
  }
  public set osConfigCustomEndpoint(value: string | undefined) {
    this._osConfigCustomEndpoint = value;
  }
  public resetOsConfigCustomEndpoint() {
    this._osConfigCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConfigCustomEndpointInput() {
    return this._osConfigCustomEndpoint;
  }

  // os_login_custom_endpoint - computed: false, optional: true, required: false
  private _osLoginCustomEndpoint?: string; 
  public get osLoginCustomEndpoint() {
    return this._osLoginCustomEndpoint;
  }
  public set osLoginCustomEndpoint(value: string | undefined) {
    this._osLoginCustomEndpoint = value;
  }
  public resetOsLoginCustomEndpoint() {
    this._osLoginCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osLoginCustomEndpointInput() {
    return this._osLoginCustomEndpoint;
  }

  // privateca_custom_endpoint - computed: false, optional: true, required: false
  private _privatecaCustomEndpoint?: string; 
  public get privatecaCustomEndpoint() {
    return this._privatecaCustomEndpoint;
  }
  public set privatecaCustomEndpoint(value: string | undefined) {
    this._privatecaCustomEndpoint = value;
  }
  public resetPrivatecaCustomEndpoint() {
    this._privatecaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatecaCustomEndpointInput() {
    return this._privatecaCustomEndpoint;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // public_ca_custom_endpoint - computed: false, optional: true, required: false
  private _publicCaCustomEndpoint?: string; 
  public get publicCaCustomEndpoint() {
    return this._publicCaCustomEndpoint;
  }
  public set publicCaCustomEndpoint(value: string | undefined) {
    this._publicCaCustomEndpoint = value;
  }
  public resetPublicCaCustomEndpoint() {
    this._publicCaCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCaCustomEndpointInput() {
    return this._publicCaCustomEndpoint;
  }

  // pubsub_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubCustomEndpoint?: string; 
  public get pubsubCustomEndpoint() {
    return this._pubsubCustomEndpoint;
  }
  public set pubsubCustomEndpoint(value: string | undefined) {
    this._pubsubCustomEndpoint = value;
  }
  public resetPubsubCustomEndpoint() {
    this._pubsubCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubCustomEndpointInput() {
    return this._pubsubCustomEndpoint;
  }

  // pubsub_lite_custom_endpoint - computed: false, optional: true, required: false
  private _pubsubLiteCustomEndpoint?: string; 
  public get pubsubLiteCustomEndpoint() {
    return this._pubsubLiteCustomEndpoint;
  }
  public set pubsubLiteCustomEndpoint(value: string | undefined) {
    this._pubsubLiteCustomEndpoint = value;
  }
  public resetPubsubLiteCustomEndpoint() {
    this._pubsubLiteCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubLiteCustomEndpointInput() {
    return this._pubsubLiteCustomEndpoint;
  }

  // recaptcha_enterprise_custom_endpoint - computed: false, optional: true, required: false
  private _recaptchaEnterpriseCustomEndpoint?: string; 
  public get recaptchaEnterpriseCustomEndpoint() {
    return this._recaptchaEnterpriseCustomEndpoint;
  }
  public set recaptchaEnterpriseCustomEndpoint(value: string | undefined) {
    this._recaptchaEnterpriseCustomEndpoint = value;
  }
  public resetRecaptchaEnterpriseCustomEndpoint() {
    this._recaptchaEnterpriseCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaEnterpriseCustomEndpointInput() {
    return this._recaptchaEnterpriseCustomEndpoint;
  }

  // redis_custom_endpoint - computed: false, optional: true, required: false
  private _redisCustomEndpoint?: string; 
  public get redisCustomEndpoint() {
    return this._redisCustomEndpoint;
  }
  public set redisCustomEndpoint(value: string | undefined) {
    this._redisCustomEndpoint = value;
  }
  public resetRedisCustomEndpoint() {
    this._redisCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCustomEndpointInput() {
    return this._redisCustomEndpoint;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_reason - computed: false, optional: true, required: false
  private _requestReason?: string; 
  public get requestReason() {
    return this._requestReason;
  }
  public set requestReason(value: string | undefined) {
    this._requestReason = value;
  }
  public resetRequestReason() {
    this._requestReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestReasonInput() {
    return this._requestReason;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // resource_manager_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerCustomEndpoint?: string; 
  public get resourceManagerCustomEndpoint() {
    return this._resourceManagerCustomEndpoint;
  }
  public set resourceManagerCustomEndpoint(value: string | undefined) {
    this._resourceManagerCustomEndpoint = value;
  }
  public resetResourceManagerCustomEndpoint() {
    this._resourceManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerCustomEndpointInput() {
    return this._resourceManagerCustomEndpoint;
  }

  // resource_manager_v3_custom_endpoint - computed: false, optional: true, required: false
  private _resourceManagerV3CustomEndpoint?: string; 
  public get resourceManagerV3CustomEndpoint() {
    return this._resourceManagerV3CustomEndpoint;
  }
  public set resourceManagerV3CustomEndpoint(value: string | undefined) {
    this._resourceManagerV3CustomEndpoint = value;
  }
  public resetResourceManagerV3CustomEndpoint() {
    this._resourceManagerV3CustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerV3CustomEndpointInput() {
    return this._resourceManagerV3CustomEndpoint;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_manager_custom_endpoint - computed: false, optional: true, required: false
  private _secretManagerCustomEndpoint?: string; 
  public get secretManagerCustomEndpoint() {
    return this._secretManagerCustomEndpoint;
  }
  public set secretManagerCustomEndpoint(value: string | undefined) {
    this._secretManagerCustomEndpoint = value;
  }
  public resetSecretManagerCustomEndpoint() {
    this._secretManagerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerCustomEndpointInput() {
    return this._secretManagerCustomEndpoint;
  }

  // security_center_custom_endpoint - computed: false, optional: true, required: false
  private _securityCenterCustomEndpoint?: string; 
  public get securityCenterCustomEndpoint() {
    return this._securityCenterCustomEndpoint;
  }
  public set securityCenterCustomEndpoint(value: string | undefined) {
    this._securityCenterCustomEndpoint = value;
  }
  public resetSecurityCenterCustomEndpoint() {
    this._securityCenterCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCenterCustomEndpointInput() {
    return this._securityCenterCustomEndpoint;
  }

  // service_management_custom_endpoint - computed: false, optional: true, required: false
  private _serviceManagementCustomEndpoint?: string; 
  public get serviceManagementCustomEndpoint() {
    return this._serviceManagementCustomEndpoint;
  }
  public set serviceManagementCustomEndpoint(value: string | undefined) {
    this._serviceManagementCustomEndpoint = value;
  }
  public resetServiceManagementCustomEndpoint() {
    this._serviceManagementCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceManagementCustomEndpointInput() {
    return this._serviceManagementCustomEndpoint;
  }

  // service_networking_custom_endpoint - computed: false, optional: true, required: false
  private _serviceNetworkingCustomEndpoint?: string; 
  public get serviceNetworkingCustomEndpoint() {
    return this._serviceNetworkingCustomEndpoint;
  }
  public set serviceNetworkingCustomEndpoint(value: string | undefined) {
    this._serviceNetworkingCustomEndpoint = value;
  }
  public resetServiceNetworkingCustomEndpoint() {
    this._serviceNetworkingCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingCustomEndpointInput() {
    return this._serviceNetworkingCustomEndpoint;
  }

  // service_usage_custom_endpoint - computed: false, optional: true, required: false
  private _serviceUsageCustomEndpoint?: string; 
  public get serviceUsageCustomEndpoint() {
    return this._serviceUsageCustomEndpoint;
  }
  public set serviceUsageCustomEndpoint(value: string | undefined) {
    this._serviceUsageCustomEndpoint = value;
  }
  public resetServiceUsageCustomEndpoint() {
    this._serviceUsageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUsageCustomEndpointInput() {
    return this._serviceUsageCustomEndpoint;
  }

  // source_repo_custom_endpoint - computed: false, optional: true, required: false
  private _sourceRepoCustomEndpoint?: string; 
  public get sourceRepoCustomEndpoint() {
    return this._sourceRepoCustomEndpoint;
  }
  public set sourceRepoCustomEndpoint(value: string | undefined) {
    this._sourceRepoCustomEndpoint = value;
  }
  public resetSourceRepoCustomEndpoint() {
    this._sourceRepoCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepoCustomEndpointInput() {
    return this._sourceRepoCustomEndpoint;
  }

  // spanner_custom_endpoint - computed: false, optional: true, required: false
  private _spannerCustomEndpoint?: string; 
  public get spannerCustomEndpoint() {
    return this._spannerCustomEndpoint;
  }
  public set spannerCustomEndpoint(value: string | undefined) {
    this._spannerCustomEndpoint = value;
  }
  public resetSpannerCustomEndpoint() {
    this._spannerCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spannerCustomEndpointInput() {
    return this._spannerCustomEndpoint;
  }

  // sql_custom_endpoint - computed: false, optional: true, required: false
  private _sqlCustomEndpoint?: string; 
  public get sqlCustomEndpoint() {
    return this._sqlCustomEndpoint;
  }
  public set sqlCustomEndpoint(value: string | undefined) {
    this._sqlCustomEndpoint = value;
  }
  public resetSqlCustomEndpoint() {
    this._sqlCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlCustomEndpointInput() {
    return this._sqlCustomEndpoint;
  }

  // storage_custom_endpoint - computed: false, optional: true, required: false
  private _storageCustomEndpoint?: string; 
  public get storageCustomEndpoint() {
    return this._storageCustomEndpoint;
  }
  public set storageCustomEndpoint(value: string | undefined) {
    this._storageCustomEndpoint = value;
  }
  public resetStorageCustomEndpoint() {
    this._storageCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCustomEndpointInput() {
    return this._storageCustomEndpoint;
  }

  // storage_insights_custom_endpoint - computed: false, optional: true, required: false
  private _storageInsightsCustomEndpoint?: string; 
  public get storageInsightsCustomEndpoint() {
    return this._storageInsightsCustomEndpoint;
  }
  public set storageInsightsCustomEndpoint(value: string | undefined) {
    this._storageInsightsCustomEndpoint = value;
  }
  public resetStorageInsightsCustomEndpoint() {
    this._storageInsightsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInsightsCustomEndpointInput() {
    return this._storageInsightsCustomEndpoint;
  }

  // storage_transfer_custom_endpoint - computed: false, optional: true, required: false
  private _storageTransferCustomEndpoint?: string; 
  public get storageTransferCustomEndpoint() {
    return this._storageTransferCustomEndpoint;
  }
  public set storageTransferCustomEndpoint(value: string | undefined) {
    this._storageTransferCustomEndpoint = value;
  }
  public resetStorageTransferCustomEndpoint() {
    this._storageTransferCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTransferCustomEndpointInput() {
    return this._storageTransferCustomEndpoint;
  }

  // tags_custom_endpoint - computed: false, optional: true, required: false
  private _tagsCustomEndpoint?: string; 
  public get tagsCustomEndpoint() {
    return this._tagsCustomEndpoint;
  }
  public set tagsCustomEndpoint(value: string | undefined) {
    this._tagsCustomEndpoint = value;
  }
  public resetTagsCustomEndpoint() {
    this._tagsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsCustomEndpointInput() {
    return this._tagsCustomEndpoint;
  }

  // tags_location_custom_endpoint - computed: false, optional: true, required: false
  private _tagsLocationCustomEndpoint?: string; 
  public get tagsLocationCustomEndpoint() {
    return this._tagsLocationCustomEndpoint;
  }
  public set tagsLocationCustomEndpoint(value: string | undefined) {
    this._tagsLocationCustomEndpoint = value;
  }
  public resetTagsLocationCustomEndpoint() {
    this._tagsLocationCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsLocationCustomEndpointInput() {
    return this._tagsLocationCustomEndpoint;
  }

  // tpu_custom_endpoint - computed: false, optional: true, required: false
  private _tpuCustomEndpoint?: string; 
  public get tpuCustomEndpoint() {
    return this._tpuCustomEndpoint;
  }
  public set tpuCustomEndpoint(value: string | undefined) {
    this._tpuCustomEndpoint = value;
  }
  public resetTpuCustomEndpoint() {
    this._tpuCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuCustomEndpointInput() {
    return this._tpuCustomEndpoint;
  }

  // user_project_override - computed: false, optional: true, required: false
  private _userProjectOverride?: boolean | cdktf.IResolvable; 
  public get userProjectOverride() {
    return this._userProjectOverride;
  }
  public set userProjectOverride(value: boolean | cdktf.IResolvable | undefined) {
    this._userProjectOverride = value;
  }
  public resetUserProjectOverride() {
    this._userProjectOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProjectOverrideInput() {
    return this._userProjectOverride;
  }

  // vertex_ai_custom_endpoint - computed: false, optional: true, required: false
  private _vertexAiCustomEndpoint?: string; 
  public get vertexAiCustomEndpoint() {
    return this._vertexAiCustomEndpoint;
  }
  public set vertexAiCustomEndpoint(value: string | undefined) {
    this._vertexAiCustomEndpoint = value;
  }
  public resetVertexAiCustomEndpoint() {
    this._vertexAiCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertexAiCustomEndpointInput() {
    return this._vertexAiCustomEndpoint;
  }

  // vpc_access_custom_endpoint - computed: false, optional: true, required: false
  private _vpcAccessCustomEndpoint?: string; 
  public get vpcAccessCustomEndpoint() {
    return this._vpcAccessCustomEndpoint;
  }
  public set vpcAccessCustomEndpoint(value: string | undefined) {
    this._vpcAccessCustomEndpoint = value;
  }
  public resetVpcAccessCustomEndpoint() {
    this._vpcAccessCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessCustomEndpointInput() {
    return this._vpcAccessCustomEndpoint;
  }

  // workflows_custom_endpoint - computed: false, optional: true, required: false
  private _workflowsCustomEndpoint?: string; 
  public get workflowsCustomEndpoint() {
    return this._workflowsCustomEndpoint;
  }
  public set workflowsCustomEndpoint(value: string | undefined) {
    this._workflowsCustomEndpoint = value;
  }
  public resetWorkflowsCustomEndpoint() {
    this._workflowsCustomEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsCustomEndpointInput() {
    return this._workflowsCustomEndpoint;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // batching - computed: false, optional: true, required: false
  private _batching?: GoogleProviderBatching; 
  public get batching() {
    return this._batching;
  }
  public set batching(value: GoogleProviderBatching | undefined) {
    this._batching = value;
  }
  public resetBatching() {
    this._batching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchingInput() {
    return this._batching;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_approval_custom_endpoint: cdktf.stringToTerraform(this._accessApprovalCustomEndpoint),
      access_context_manager_custom_endpoint: cdktf.stringToTerraform(this._accessContextManagerCustomEndpoint),
      access_token: cdktf.stringToTerraform(this._accessToken),
      active_directory_custom_endpoint: cdktf.stringToTerraform(this._activeDirectoryCustomEndpoint),
      alloydb_custom_endpoint: cdktf.stringToTerraform(this._alloydbCustomEndpoint),
      apigee_custom_endpoint: cdktf.stringToTerraform(this._apigeeCustomEndpoint),
      apikeys_custom_endpoint: cdktf.stringToTerraform(this._apikeysCustomEndpoint),
      app_engine_custom_endpoint: cdktf.stringToTerraform(this._appEngineCustomEndpoint),
      artifact_registry_custom_endpoint: cdktf.stringToTerraform(this._artifactRegistryCustomEndpoint),
      assured_workloads_custom_endpoint: cdktf.stringToTerraform(this._assuredWorkloadsCustomEndpoint),
      beyondcorp_custom_endpoint: cdktf.stringToTerraform(this._beyondcorpCustomEndpoint),
      big_query_custom_endpoint: cdktf.stringToTerraform(this._bigQueryCustomEndpoint),
      biglake_custom_endpoint: cdktf.stringToTerraform(this._biglakeCustomEndpoint),
      bigquery_analytics_hub_custom_endpoint: cdktf.stringToTerraform(this._bigqueryAnalyticsHubCustomEndpoint),
      bigquery_connection_custom_endpoint: cdktf.stringToTerraform(this._bigqueryConnectionCustomEndpoint),
      bigquery_data_transfer_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDataTransferCustomEndpoint),
      bigquery_datapolicy_custom_endpoint: cdktf.stringToTerraform(this._bigqueryDatapolicyCustomEndpoint),
      bigquery_reservation_custom_endpoint: cdktf.stringToTerraform(this._bigqueryReservationCustomEndpoint),
      bigtable_custom_endpoint: cdktf.stringToTerraform(this._bigtableCustomEndpoint),
      billing_custom_endpoint: cdktf.stringToTerraform(this._billingCustomEndpoint),
      billing_project: cdktf.stringToTerraform(this._billingProject),
      binary_authorization_custom_endpoint: cdktf.stringToTerraform(this._binaryAuthorizationCustomEndpoint),
      certificate_manager_custom_endpoint: cdktf.stringToTerraform(this._certificateManagerCustomEndpoint),
      cloud_asset_custom_endpoint: cdktf.stringToTerraform(this._cloudAssetCustomEndpoint),
      cloud_billing_custom_endpoint: cdktf.stringToTerraform(this._cloudBillingCustomEndpoint),
      cloud_build_custom_endpoint: cdktf.stringToTerraform(this._cloudBuildCustomEndpoint),
      cloud_build_worker_pool_custom_endpoint: cdktf.stringToTerraform(this._cloudBuildWorkerPoolCustomEndpoint),
      cloud_functions_custom_endpoint: cdktf.stringToTerraform(this._cloudFunctionsCustomEndpoint),
      cloud_identity_custom_endpoint: cdktf.stringToTerraform(this._cloudIdentityCustomEndpoint),
      cloud_ids_custom_endpoint: cdktf.stringToTerraform(this._cloudIdsCustomEndpoint),
      cloud_iot_custom_endpoint: cdktf.stringToTerraform(this._cloudIotCustomEndpoint),
      cloud_resource_manager_custom_endpoint: cdktf.stringToTerraform(this._cloudResourceManagerCustomEndpoint),
      cloud_run_custom_endpoint: cdktf.stringToTerraform(this._cloudRunCustomEndpoint),
      cloud_run_v2_custom_endpoint: cdktf.stringToTerraform(this._cloudRunV2CustomEndpoint),
      cloud_scheduler_custom_endpoint: cdktf.stringToTerraform(this._cloudSchedulerCustomEndpoint),
      cloud_tasks_custom_endpoint: cdktf.stringToTerraform(this._cloudTasksCustomEndpoint),
      cloudbuildv2_custom_endpoint: cdktf.stringToTerraform(this._cloudbuildv2CustomEndpoint),
      clouddeploy_custom_endpoint: cdktf.stringToTerraform(this._clouddeployCustomEndpoint),
      cloudfunctions2_custom_endpoint: cdktf.stringToTerraform(this._cloudfunctions2CustomEndpoint),
      composer_custom_endpoint: cdktf.stringToTerraform(this._composerCustomEndpoint),
      compute_custom_endpoint: cdktf.stringToTerraform(this._computeCustomEndpoint),
      container_analysis_custom_endpoint: cdktf.stringToTerraform(this._containerAnalysisCustomEndpoint),
      container_attached_custom_endpoint: cdktf.stringToTerraform(this._containerAttachedCustomEndpoint),
      container_aws_custom_endpoint: cdktf.stringToTerraform(this._containerAwsCustomEndpoint),
      container_azure_custom_endpoint: cdktf.stringToTerraform(this._containerAzureCustomEndpoint),
      container_custom_endpoint: cdktf.stringToTerraform(this._containerCustomEndpoint),
      core_billing_custom_endpoint: cdktf.stringToTerraform(this._coreBillingCustomEndpoint),
      credentials: cdktf.stringToTerraform(this._credentials),
      data_catalog_custom_endpoint: cdktf.stringToTerraform(this._dataCatalogCustomEndpoint),
      data_fusion_custom_endpoint: cdktf.stringToTerraform(this._dataFusionCustomEndpoint),
      data_loss_prevention_custom_endpoint: cdktf.stringToTerraform(this._dataLossPreventionCustomEndpoint),
      data_pipeline_custom_endpoint: cdktf.stringToTerraform(this._dataPipelineCustomEndpoint),
      database_migration_service_custom_endpoint: cdktf.stringToTerraform(this._databaseMigrationServiceCustomEndpoint),
      dataflow_custom_endpoint: cdktf.stringToTerraform(this._dataflowCustomEndpoint),
      dataplex_custom_endpoint: cdktf.stringToTerraform(this._dataplexCustomEndpoint),
      dataproc_custom_endpoint: cdktf.stringToTerraform(this._dataprocCustomEndpoint),
      dataproc_metastore_custom_endpoint: cdktf.stringToTerraform(this._dataprocMetastoreCustomEndpoint),
      datastore_custom_endpoint: cdktf.stringToTerraform(this._datastoreCustomEndpoint),
      datastream_custom_endpoint: cdktf.stringToTerraform(this._datastreamCustomEndpoint),
      deployment_manager_custom_endpoint: cdktf.stringToTerraform(this._deploymentManagerCustomEndpoint),
      dialogflow_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCustomEndpoint),
      dialogflow_cx_custom_endpoint: cdktf.stringToTerraform(this._dialogflowCxCustomEndpoint),
      dns_custom_endpoint: cdktf.stringToTerraform(this._dnsCustomEndpoint),
      document_ai_custom_endpoint: cdktf.stringToTerraform(this._documentAiCustomEndpoint),
      document_ai_warehouse_custom_endpoint: cdktf.stringToTerraform(this._documentAiWarehouseCustomEndpoint),
      edgenetwork_custom_endpoint: cdktf.stringToTerraform(this._edgenetworkCustomEndpoint),
      essential_contacts_custom_endpoint: cdktf.stringToTerraform(this._essentialContactsCustomEndpoint),
      eventarc_custom_endpoint: cdktf.stringToTerraform(this._eventarcCustomEndpoint),
      filestore_custom_endpoint: cdktf.stringToTerraform(this._filestoreCustomEndpoint),
      firebaserules_custom_endpoint: cdktf.stringToTerraform(this._firebaserulesCustomEndpoint),
      firestore_custom_endpoint: cdktf.stringToTerraform(this._firestoreCustomEndpoint),
      game_services_custom_endpoint: cdktf.stringToTerraform(this._gameServicesCustomEndpoint),
      gke_backup_custom_endpoint: cdktf.stringToTerraform(this._gkeBackupCustomEndpoint),
      gke_hub2_custom_endpoint: cdktf.stringToTerraform(this._gkeHub2CustomEndpoint),
      gke_hub_custom_endpoint: cdktf.stringToTerraform(this._gkeHubCustomEndpoint),
      gkehub_feature_custom_endpoint: cdktf.stringToTerraform(this._gkehubFeatureCustomEndpoint),
      healthcare_custom_endpoint: cdktf.stringToTerraform(this._healthcareCustomEndpoint),
      iam2_custom_endpoint: cdktf.stringToTerraform(this._iam2CustomEndpoint),
      iam_beta_custom_endpoint: cdktf.stringToTerraform(this._iamBetaCustomEndpoint),
      iam_credentials_custom_endpoint: cdktf.stringToTerraform(this._iamCredentialsCustomEndpoint),
      iam_custom_endpoint: cdktf.stringToTerraform(this._iamCustomEndpoint),
      iam_workforce_pool_custom_endpoint: cdktf.stringToTerraform(this._iamWorkforcePoolCustomEndpoint),
      iap_custom_endpoint: cdktf.stringToTerraform(this._iapCustomEndpoint),
      identity_platform_custom_endpoint: cdktf.stringToTerraform(this._identityPlatformCustomEndpoint),
      impersonate_service_account: cdktf.stringToTerraform(this._impersonateServiceAccount),
      impersonate_service_account_delegates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._impersonateServiceAccountDelegates),
      kms_custom_endpoint: cdktf.stringToTerraform(this._kmsCustomEndpoint),
      logging_custom_endpoint: cdktf.stringToTerraform(this._loggingCustomEndpoint),
      looker_custom_endpoint: cdktf.stringToTerraform(this._lookerCustomEndpoint),
      memcache_custom_endpoint: cdktf.stringToTerraform(this._memcacheCustomEndpoint),
      ml_engine_custom_endpoint: cdktf.stringToTerraform(this._mlEngineCustomEndpoint),
      monitoring_custom_endpoint: cdktf.stringToTerraform(this._monitoringCustomEndpoint),
      network_connectivity_custom_endpoint: cdktf.stringToTerraform(this._networkConnectivityCustomEndpoint),
      network_management_custom_endpoint: cdktf.stringToTerraform(this._networkManagementCustomEndpoint),
      network_security_custom_endpoint: cdktf.stringToTerraform(this._networkSecurityCustomEndpoint),
      network_services_custom_endpoint: cdktf.stringToTerraform(this._networkServicesCustomEndpoint),
      notebooks_custom_endpoint: cdktf.stringToTerraform(this._notebooksCustomEndpoint),
      org_policy_custom_endpoint: cdktf.stringToTerraform(this._orgPolicyCustomEndpoint),
      os_config_custom_endpoint: cdktf.stringToTerraform(this._osConfigCustomEndpoint),
      os_login_custom_endpoint: cdktf.stringToTerraform(this._osLoginCustomEndpoint),
      privateca_custom_endpoint: cdktf.stringToTerraform(this._privatecaCustomEndpoint),
      project: cdktf.stringToTerraform(this._project),
      public_ca_custom_endpoint: cdktf.stringToTerraform(this._publicCaCustomEndpoint),
      pubsub_custom_endpoint: cdktf.stringToTerraform(this._pubsubCustomEndpoint),
      pubsub_lite_custom_endpoint: cdktf.stringToTerraform(this._pubsubLiteCustomEndpoint),
      recaptcha_enterprise_custom_endpoint: cdktf.stringToTerraform(this._recaptchaEnterpriseCustomEndpoint),
      redis_custom_endpoint: cdktf.stringToTerraform(this._redisCustomEndpoint),
      region: cdktf.stringToTerraform(this._region),
      request_reason: cdktf.stringToTerraform(this._requestReason),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      resource_manager_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerCustomEndpoint),
      resource_manager_v3_custom_endpoint: cdktf.stringToTerraform(this._resourceManagerV3CustomEndpoint),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      secret_manager_custom_endpoint: cdktf.stringToTerraform(this._secretManagerCustomEndpoint),
      security_center_custom_endpoint: cdktf.stringToTerraform(this._securityCenterCustomEndpoint),
      service_management_custom_endpoint: cdktf.stringToTerraform(this._serviceManagementCustomEndpoint),
      service_networking_custom_endpoint: cdktf.stringToTerraform(this._serviceNetworkingCustomEndpoint),
      service_usage_custom_endpoint: cdktf.stringToTerraform(this._serviceUsageCustomEndpoint),
      source_repo_custom_endpoint: cdktf.stringToTerraform(this._sourceRepoCustomEndpoint),
      spanner_custom_endpoint: cdktf.stringToTerraform(this._spannerCustomEndpoint),
      sql_custom_endpoint: cdktf.stringToTerraform(this._sqlCustomEndpoint),
      storage_custom_endpoint: cdktf.stringToTerraform(this._storageCustomEndpoint),
      storage_insights_custom_endpoint: cdktf.stringToTerraform(this._storageInsightsCustomEndpoint),
      storage_transfer_custom_endpoint: cdktf.stringToTerraform(this._storageTransferCustomEndpoint),
      tags_custom_endpoint: cdktf.stringToTerraform(this._tagsCustomEndpoint),
      tags_location_custom_endpoint: cdktf.stringToTerraform(this._tagsLocationCustomEndpoint),
      tpu_custom_endpoint: cdktf.stringToTerraform(this._tpuCustomEndpoint),
      user_project_override: cdktf.booleanToTerraform(this._userProjectOverride),
      vertex_ai_custom_endpoint: cdktf.stringToTerraform(this._vertexAiCustomEndpoint),
      vpc_access_custom_endpoint: cdktf.stringToTerraform(this._vpcAccessCustomEndpoint),
      workflows_custom_endpoint: cdktf.stringToTerraform(this._workflowsCustomEndpoint),
      zone: cdktf.stringToTerraform(this._zone),
      alias: cdktf.stringToTerraform(this._alias),
      batching: googleProviderBatchingToTerraform(this._batching),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_approval_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessApprovalCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_context_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._accessContextManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._activeDirectoryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alloydb_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._alloydbCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apigee_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apigeeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikeys_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._apikeysCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._appEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifact_registry_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._artifactRegistryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assured_workloads_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._assuredWorkloadsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      beyondcorp_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._beyondcorpCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      big_query_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigQueryCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biglake_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._biglakeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_analytics_hub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryAnalyticsHubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_connection_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryConnectionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_data_transfer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryDataTransferCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_datapolicy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryDatapolicyCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_reservation_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigqueryReservationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigtable_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._bigtableCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._billingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_project: {
        value: cdktf.stringToHclTerraform(this._billingProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_authorization_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._binaryAuthorizationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._certificateManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_asset_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudAssetCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudBillingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_build_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudBuildCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_build_worker_pool_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudBuildWorkerPoolCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_functions_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudFunctionsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_identity_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudIdentityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ids_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudIdsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_iot_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudIotCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_resource_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudResourceManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_run_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudRunCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_run_v2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudRunV2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_scheduler_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudSchedulerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_tasks_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudTasksCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudbuildv2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudbuildv2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clouddeploy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._clouddeployCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudfunctions2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudfunctions2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      composer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._composerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._computeCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_analysis_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAnalysisCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_attached_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAttachedCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_aws_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAwsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_azure_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerAzureCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._containerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_billing_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._coreBillingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_catalog_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataCatalogCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_fusion_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataFusionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_loss_prevention_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataLossPreventionCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_pipeline_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataPipelineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_migration_service_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._databaseMigrationServiceCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataflow_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataflowCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataplex_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataplexCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataproc_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataprocCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataproc_metastore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dataprocMetastoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._datastoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datastream_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._datastreamCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._deploymentManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialogflow_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dialogflowCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dialogflow_cx_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dialogflowCxCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._dnsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_ai_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._documentAiCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_ai_warehouse_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._documentAiWarehouseCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgenetwork_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._edgenetworkCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      essential_contacts_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._essentialContactsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventarc_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._eventarcCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filestore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._filestoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firebaserules_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firebaserulesCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firestore_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._firestoreCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      game_services_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gameServicesCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_backup_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeBackupCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_hub2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeHub2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gke_hub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkeHubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gkehub_feature_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._gkehubFeatureCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      healthcare_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._healthcareCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam2_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iam2CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_beta_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamBetaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_credentials_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamCredentialsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_workforce_pool_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iamWorkforcePoolCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iap_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._iapCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_platform_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._identityPlatformCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_service_account: {
        value: cdktf.stringToHclTerraform(this._impersonateServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_service_account_delegates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._impersonateServiceAccountDelegates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      kms_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._kmsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logging_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._loggingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      looker_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._lookerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memcache_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._memcacheCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ml_engine_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._mlEngineCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitoring_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._monitoringCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_connectivity_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkConnectivityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_management_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkManagementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_security_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkSecurityCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_services_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._networkServicesCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notebooks_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._notebooksCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_policy_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._orgPolicyCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_config_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._osConfigCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_login_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._osLoginCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privateca_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._privatecaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ca_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._publicCaCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._pubsubCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pubsub_lite_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._pubsubLiteCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recaptcha_enterprise_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._recaptchaEnterpriseCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._redisCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_reason: {
        value: cdktf.stringToHclTerraform(this._requestReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.stringToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_manager_v3_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._resourceManagerV3CustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secret_manager_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._secretManagerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_center_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._securityCenterCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_management_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceManagementCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_networking_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceNetworkingCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_usage_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._serviceUsageCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_repo_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._sourceRepoCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spanner_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._spannerCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._sqlCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_insights_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageInsightsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_transfer_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._storageTransferCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tagsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags_location_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tagsLocationCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tpu_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._tpuCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_project_override: {
        value: cdktf.booleanToHclTerraform(this._userProjectOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vertex_ai_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._vertexAiCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_access_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._vpcAccessCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflows_custom_endpoint: {
        value: cdktf.stringToHclTerraform(this._workflowsCustomEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      batching: {
        value: googleProviderBatchingToHclTerraform(this._batching),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProviderBatchingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
