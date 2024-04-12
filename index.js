class BankBranch {
  constructor(branchInfo) {
    // Check if the instance already exists
    if (typeof BankBranch.instance === "object") {
      return BankBranch.instance; // Return the existing instance
    }

    // Initialize the instance if it doesn't exist
    this.branchInfo = branchInfo;

    // Store the instance in a static property
    BankBranch.instance = this;

    // Ensure that the constructor always returns the same instance
    return this;
  }

  getBranchInfo() {
    return this.branchInfo;
  }
}

// Usage:
const branchA = new BankBranch(
  "228, Waterfall Mall, Shop 227 &, 1 Augrabies Ave, Rustenburg, 0299"
);
console.log(branchA.getBranchInfo()); // Output: branchInfo for branchA

const branchB = new BankBranch("Shop 34, Phokeng Mall, R565, Rustenburg, 0335");
console.log(branchB.getBranchInfo()); // Output: branchInfo for branchB

console.log(branchA === branchB); // Output: true (both refer to the same instance)

// Attempting to modify branchA's info (will reflect in branchB as well)
branchA.branchInfo = "New Branch Info";
console.log(branchB.getBranchInfo()); // Output: "New Branch Info" (reflects the change made to branchA)
