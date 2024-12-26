from collections import defaultdict


class Solution:
    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:
        graph = defaultdict(list)
        preMap = defaultdict(list)
        visited = set()

        for entry in prerequisites:
            course = entry[0]
            prerequisite = entry[1]
            graph[prerequisite].append(course)
            preMap[course].append(prerequisite)

        for i in range(numCourses):
            if not preMap[i]:
                self.explore(i, visited, graph, preMap)

        if len(visited) < numCourses:
            return False
        else:
            return True

    def explore(self, root, visited, graph, preMap):
        # Check if prerequisite requirement is completed before checking a node as visited
        for i in preMap[root]:
            if i not in visited:
                return
        visited.add(root)

        for node in graph[root]:
            if node not in visited:
                self.explore(node, visited, graph, preMap)


sol = Solution()
numCourses = 3
prerequisites = [[1, 0], [1, 2], [0, 1]]

print(sol.canFinish(numCourses, prerequisites))
