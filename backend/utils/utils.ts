import { COORDS } from "./data/constants/COORDS";
import { GRAPH } from "./data/constants/GRAPH";

export function Dijkstra(startPoint: string, endPoint: string) {
    if (!(startPoint in GRAPH) || !(endPoint in GRAPH)) {
        console.log("Invalid start or end point");
        return [];
    }
    let priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(startPoint, 0);
    let distances: any = {};
    distances[startPoint] = 0;
    let previous: any = {};
    previous[startPoint] = null;
    for (let vertex in GRAPH) {
        if (vertex !== startPoint) {
            distances[vertex] = Infinity;
            previous[vertex] = null;
        }
    }
    while (!priorityQueue.isEmpty()) {
        let currentVertex: any = priorityQueue.dequeue();
        for (let neighbor in GRAPH[currentVertex]) {
            let potentialShortestDistance = distances[currentVertex] + GRAPH[currentVertex][neighbor];
            if (potentialShortestDistance < distances[neighbor]) {
                distances[neighbor] = potentialShortestDistance;
                previous[neighbor] = currentVertex;
                priorityQueue.enqueue(neighbor, potentialShortestDistance);
            }
        }
    }
    let path = [];
    let current = endPoint;
    while (current !== null) {
        path.unshift(current);
        current = previous[current];
    }
    let result: any = []
    path.forEach(p => {
        if (p in COORDS) result.push([COORDS[p].lt, COORDS[p].long]);
    });
    return result;
}

class PriorityQueue<T> {
    private queue: { element: T; priority: number }[];

    constructor() {
        this.queue = [];
    }

    enqueue(element: T, priority: number): void {
        this.queue.push({ element, priority });
        this.sortQueue();
    }

    dequeue(): T | null {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift()?.element ?? null;
    }

    isEmpty(): boolean {
        return this.queue.length === 0;
    }

    private sortQueue(): void {
        this.queue.sort((a, b) => a.priority - b.priority);
    }
}

export function findIntersection(arr1: any[], arr2: any[]) {
    return arr1.filter(value => arr2.includes(value));
}