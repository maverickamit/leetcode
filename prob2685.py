from collections import defaultdict


class Solution:
    def countCompleteComponents(self, n: int, edges: list[list[int]]) -> int:
        graph = defaultdict(list)
        curr_component = []

        visited = set()
        complete = 0

        for a, b in edges:
            graph[a].append(b)
            graph[b].append(a)

        for i in range(n):
            is_Complete = True
            curr_component = []
            if self.explore(i, visited, graph, curr_component):
                for node in curr_component:
                    if len(graph[node]) != (len(curr_component) - 1):
                        is_Complete = False
                        break
                if is_Complete and len(curr_component):
                    complete += 1

        return complete

    def explore(self, root, visited, graph, curr_component):
        if root in visited:
            return False
        visited.add(root)
        curr_component.append(root)
        for neighbour in graph[root]:
            self.explore(neighbour, visited, graph, curr_component)
        return True


n = 6
edges = [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]

sol = Solution()

print(sol.countCompleteComponents(n, edges))
