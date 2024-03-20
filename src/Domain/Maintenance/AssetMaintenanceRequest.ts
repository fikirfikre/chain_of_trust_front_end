import { Asset } from "../Asset/Asset";
import { CustomRequest } from "../Request";
import { User } from "../User/User";

export interface AssetMaintenanceRequest{
    id: string;
    createDatetime: Date;
    resolveDatetime?: Date;
    approved?: boolean;
    user: User;
    rejected?: boolean;
    rejectionReason?: undefined;
    asset: Asset;
}