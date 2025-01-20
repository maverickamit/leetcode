import math


class Solution:
    def firstBadVersion(self, n: int) -> int:
        first, last = 1, n
        while first <= last:
            middle = math.floor((first + last) / 2)
            if isBadVersion(first):
                return first
            elif not isBadVersion(last - 1):
                return last
            elif isBadVersion(middle):
                last = middle
            else:
                first = middle


# Mock implementation of the isBadVersion API
def isBadVersion(version):
    return version >= first_bad_version


# Test case for the firstBadVersion function
def test_first_bad_version():
    global first_bad_version  # Declare global variable for the mock
    test_cases = [
        # (5, 4),  # n = 5, first bad version = 4
        # (10, 1),  # n = 10, first bad version = 1
        # (1, 1),  # n = 1, first bad version = 1
        # (20, 15),  # n = 20, first bad version = 15
        (2126753390, 1702766719),
    ]

    sol = Solution()

    for n, expected in test_cases:
        first_bad_version = expected  # Set the mock bad version
        result = sol.firstBadVersion(n)  # Call the function
        assert result == expected, (
            f"Test failed for n={n}. Expected {expected}, got {result}"
        )
    print("All tests passed!")


# Call the test function (uncomment to run after implementing `firstBadVersion`)
test_first_bad_version()
