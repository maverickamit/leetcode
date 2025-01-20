from collections import deque


class Solution:
    def floodFill(
        self, image: list[list[int]], sr: int, sc: int, color: int
    ) -> list[list[int]]:
        queue = deque()
        visited = set()
        matchcolor = image[sr][sc]
        # No changes needed since starting color and provided color are the same
        if matchcolor == color:
            return image
        m = len(image)
        n = len(image[0])

        queue.append((sr, sc))
        visited.add((sr, sc))

        while len(queue):
            current = queue.pop()
            (sr, sc) = current
            image[sr][sc] = color
            if (
                sr + 1 < m
                and image[sr + 1][sc] == matchcolor
                and (sr + 1, sc) not in visited
            ):
                queue.appendleft((sr + 1, sc))
                visited.add((sr + 1, sc))
            if (
                sr - 1 >= 0
                and image[sr - 1][sc] == matchcolor
                and (sr - 1, sc) not in visited
            ):
                queue.appendleft((sr - 1, sc))
                visited.add((sr - 1, sc))
            if (
                sc + 1 < n
                and image[sr][sc + 1] == matchcolor
                and (sr, sc + 1) not in visited
            ):
                queue.appendleft((sr, sc + 1))
                visited.add((sr, sc + 1))
            if (
                sc - 1 >= 0
                and image[sr][sc - 1] == matchcolor
                and (sr, sc - 1) not in visited
            ):
                queue.appendleft((sr, sc - 1))
                visited.add((sr, sc - 1))

        return image


def test_flood_fill():
    # Import the solution class

    # Create an instance of the solution class
    solution = Solution()

    # Test cases
    test_cases = [
        # Test case 1
        {
            "image": [[1, 1, 1], [1, 1, 0], [1, 0, 1]],
            "sr": 1,
            "sc": 1,
            "newColor": 2,
            "expected": [[2, 2, 2], [2, 2, 0], [2, 0, 1]],
        },
        # Test case 2
        {
            "image": [[0, 0, 0], [0, 0, 0]],
            "sr": 0,
            "sc": 0,
            "newColor": 2,
            "expected": [[2, 2, 2], [2, 2, 2]],
        },
        # Test case 3
        {"image": [[1]], "sr": 0, "sc": 0, "newColor": 3, "expected": [[3]]},
        # Test case 4
        {
            "image": [[0, 0, 0], [0, 1, 1]],
            "sr": 1,
            "sc": 1,
            "newColor": 1,
            "expected": [[0, 0, 0], [0, 1, 1]],  # No change
        },
    ]

    # Run test cases
    for i, test in enumerate(test_cases):
        result = solution.floodFill(
            test["image"], test["sr"], test["sc"], test["newColor"]
        )
        assert result == test["expected"], (
            f"Test case {i + 1} failed: {result} != {test['expected']}"
        )
    print("All test cases passed!")


if __name__ == "__main__":
    test_flood_fill()
