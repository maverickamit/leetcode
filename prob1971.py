from collections import defaultdict


class Solution:
    def validPath(
        self, n: int, edges: list[list[int]], source: int, destination: int
    ) -> bool:
        # Create adjacency list
        graph = defaultdict(list)
        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        # Depth First Search
        stack, seen = [source], set([source])
        while stack:
            curr = stack.pop()
            if curr == destination:
                return True
            for neighbor in graph[curr]:
                if neighbor not in seen:
                    stack.append(neighbor)
                    seen.add(neighbor)
        return False


n = 3
edges = [[0, 1], [1, 2], [2, 0]]
source = 0
destination = 2

sol = Solution()

print(sol.validPath(n, edges, source, destination))
