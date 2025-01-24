from collections import defaultdict

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        anagram_map=defaultdict(list)
        ans=[]
        for s in strs:
            count =[0]*26
            for c in s:
                count[ord(c)-ord("a")]+=1
            anagram_map[tuple(count)].append(s)
        for val in anagram_map.values():
            ans.append(val)

        return ans