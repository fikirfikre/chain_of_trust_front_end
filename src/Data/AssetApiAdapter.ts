import { Asset } from "../Domain/Asset/Asset";
import { AssetService } from "../Domain/Asset/AssetService";
import {  fetchAssets} from "../api/api";

export class AssetApiAdapter implements AssetService{
  createAsset(asset: Asset): Promise<Asset> {
    throw new Error("Method not implemented.");
  }
  updateAsset(asset: Asset): Promise<Asset> {
    throw new Error("Method not implemented.");
  }
  deleteAsset(assetId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async  fetchAssets(): Promise<Asset[]> {
  try {
    return await fetchAssets()
  } catch (error) {
    throw error;
  }
        
    }

  }

    // async updateAsset(asset: Asset): Promise<Asset> {
    //     return await updateAsset(asset)
    //   }

    // async  deleteAsset(assetId: string): Promise<void> {
    //     throw new Error("Method not implemented.");
    // }

