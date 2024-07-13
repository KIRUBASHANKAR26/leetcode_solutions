function majorityElement(nums) {
    if (nums.length === 1) return nums[0]

    const map = new Map()
    const majorityNumber = Math.ceil(nums.length / 2)

    for (let num of nums) {
        const currentNum = map.get(num)
        if (currentNum) {
            map.set(num, currentNum + 1)
            if (currentNum + 1 >= majorityNumber) return num
        } else {
            map.set(num, 1)
        }
    }
};