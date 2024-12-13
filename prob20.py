from collections import deque


class Solution:
    def isValid(self, s: str) -> bool:
        stack = deque()
        for char in s:
            if char in "({[":
                stack.append(char)
            elif stack and 0 < ord(char) - ord(stack[-1]) <= 2:
                stack.pop()
            else:
                return False
        return not stack
