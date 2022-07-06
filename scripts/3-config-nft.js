import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xa3dA9d2907213A44A7168c02299D9e5a5bD59959");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "The Dong",
        description: "The Dong from this big bell will give you access to the BigDongKongDAO!",
        image: readFileSync("scripts/assets/dong.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();