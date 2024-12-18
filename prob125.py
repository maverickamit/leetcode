class Solution:
    def isPalindrome(self, s: str) -> bool:
        a = "".join(char.lower() for char in s if char.isalnum())

        stack = []

        odd = False if (len(a) % 2 == 0) else True

        i = 0
        while i < len(a) // 2:
            stack.append(a[i])
            i += 1
        if odd:
            i = len(stack) + 1
        else:
            i = len(stack)
        while i < len(a):
            if a[i] != stack.pop():
                return False
            i += 1

        return len(stack) == 0


sol = Solution()

print(sol.isPalindrome("ab"))
