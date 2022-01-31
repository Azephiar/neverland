import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x47Ea152d48987fb1E3E86A1221C9FD0d3cb53175",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Neverlands's key",
        description: "The key that opens the door to neverland.",
        image: readFileSync("scripts/assets/key64_64.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()