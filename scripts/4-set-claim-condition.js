import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0x47Ea152d48987fb1E3E86A1221C9FD0d3cb53175",
);


(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory({gasLimit:100000});
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 25,
      maxQuantityPerTransaction: 1
    });
    
    
    await bundleDrop.setClaimCondition(0, claimConditionFactory,);
    console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()