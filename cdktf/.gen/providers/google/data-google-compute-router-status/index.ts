// https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeRouterStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the router to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status#name DataGoogleComputeRouterStatus#name}
  */
  readonly name: string;
  /**
  * Project ID of the target router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status#project DataGoogleComputeRouterStatus#project}
  */
  readonly project?: string;
  /**
  * Region of the target router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status#region DataGoogleComputeRouterStatus#region}
  */
  readonly region?: string;
}
export interface DataGoogleComputeRouterStatusBestRoutes {
}

export function dataGoogleComputeRouterStatusBestRoutesToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_range - computed: true, optional: false, required: false
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // next_hop_gateway - computed: true, optional: false, required: false
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }

  // next_hop_ilb - computed: true, optional: false, required: false
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }

  // next_hop_instance - computed: true, optional: false, required: false
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }

  // next_hop_instance_zone - computed: true, optional: false, required: false
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // next_hop_network - computed: true, optional: false, required: false
  public get nextHopNetwork() {
    return this.getStringAttribute('next_hop_network');
  }

  // next_hop_vpn_tunnel - computed: true, optional: false, required: false
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class DataGoogleComputeRouterStatusBestRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRouterStatusBestRoutesForRouter {
}

export function dataGoogleComputeRouterStatusBestRoutesForRouterToTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRouterStatusBestRoutesForRouterToHclTerraform(struct?: DataGoogleComputeRouterStatusBestRoutesForRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeRouterStatusBestRoutesForRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRouterStatusBestRoutesForRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dest_range - computed: true, optional: false, required: false
  public get destRange() {
    return this.getStringAttribute('dest_range');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // next_hop_gateway - computed: true, optional: false, required: false
  public get nextHopGateway() {
    return this.getStringAttribute('next_hop_gateway');
  }

  // next_hop_ilb - computed: true, optional: false, required: false
  public get nextHopIlb() {
    return this.getStringAttribute('next_hop_ilb');
  }

  // next_hop_instance - computed: true, optional: false, required: false
  public get nextHopInstance() {
    return this.getStringAttribute('next_hop_instance');
  }

  // next_hop_instance_zone - computed: true, optional: false, required: false
  public get nextHopInstanceZone() {
    return this.getStringAttribute('next_hop_instance_zone');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // next_hop_network - computed: true, optional: false, required: false
  public get nextHopNetwork() {
    return this.getStringAttribute('next_hop_network');
  }

  // next_hop_vpn_tunnel - computed: true, optional: false, required: false
  public get nextHopVpnTunnel() {
    return this.getStringAttribute('next_hop_vpn_tunnel');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class DataGoogleComputeRouterStatusBestRoutesForRouterList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference {
    return new DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status google_compute_router_status}
*/
export class DataGoogleComputeRouterStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeRouterStatus to import
  * @param importFromId The id of the existing DataGoogleComputeRouterStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeRouterStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_router_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.85.0/docs/data-sources/compute_router_status google_compute_router_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeRouterStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeRouterStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_status',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.85.0',
        providerVersionConstraint: '~>4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // best_routes - computed: true, optional: false, required: false
  private _bestRoutes = new DataGoogleComputeRouterStatusBestRoutesList(this, "best_routes", false);
  public get bestRoutes() {
    return this._bestRoutes;
  }

  // best_routes_for_router - computed: true, optional: false, required: false
  private _bestRoutesForRouter = new DataGoogleComputeRouterStatusBestRoutesForRouterList(this, "best_routes_for_router", false);
  public get bestRoutesForRouter() {
    return this._bestRoutesForRouter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
