/**
 * Given a set of distinct integers, nums,
 * return all possible subsets (the power set).
 *
 * Note: The solution set must not contain duplicate subsets.
 *
 * @class Subsets
 */
class Subsets {
  /**
   * Creates an instance of Subsets.
   * @memberof Subsets
   */
  constructor() {
    this.subSets = [];
    this.nums = [];
  }

  /**
   *
   *
   * @param {array} nums
   * @returns
   * @memberof Subsets
   */
  getSubsets(nums) {
    this.nums = [...nums];
    this.calcSubsets();
    return this.subSets;
  }

  /**
   *
   *
   * @param {number} [nextIndex=0]
   * @param {array} [subSet=[]]
   * @memberof Subsets
   */
  calcSubsets(nextIndex = 0, subSet = []) {
    if (nextIndex < this.nums.length) {
      this.calcSubsets(nextIndex + 1, subSet);

      const newSubSet = [...subSet];

      newSubSet.push(this.nums[nextIndex]);

      this.calcSubsets(nextIndex + 1, newSubSet);
    } else {
      this.subSets.push(subSet);
    }
  }
}

module.exports = new Subsets();
