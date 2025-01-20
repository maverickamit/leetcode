from collections import defaultdict


class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        charmap = defaultdict(int)

        for i in magazine:
            charmap[i] += 1

        for i in ransomNote:
            if not charmap[i]:
                return False
            charmap[i] -= 1

        return True
