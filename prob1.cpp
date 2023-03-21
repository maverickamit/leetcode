#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int length = nums.size();
        vector<int> answervector(2, 0);
        for(int i = 0; i < length; i++){
            for(int j = i + 1; j < length; j++){
                if(nums[i] + nums[j] == target) {
                    answervector[0] = i;
                    answervector[1] = j;
                    return answervector;
                }
            }
        }
        return answervector;
    }
};