let bankBranchInstance = null;

class BankBranch {
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }
    return bankBranchInstance;
  }

  getBranchInfo() {
    return this.branchInfo;
  }
}

const branchA = new BankBranch(
  "228, Waterfall Mall, Shop 227 &, 1 Augrabies Ave, Rustenburg, 0299"
);
console.log(branchA.getBranchInfo());

const branchB = new BankBranch("Shop 34, Phokeng Mall, R565, Rustenburg, 0335");
console.log(branchB.getBranchInfo());

console.log(branchA === branchB);
