import { COORDS } from "./data/constants/COORDS";
import { GRAPH } from "./data/constants/GRAPH";

export function Dijkstra(startPoint: string, endPoint: string) {
    if (!(startPoint in GRAPH) || !(endPoint in GRAPH)) {
        console.log(startPoint + " " + endPoint);
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
        if (p in COORDS) result.push([COORDS[p].lat, COORDS[p].long]);
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

/**
 * Finds the intersection of two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} The intersection of the two arrays.
 */
export function findIntersection(arr1: any[], arr2: any[]) {
    return arr1.filter(value => arr2.includes(value));
}

/**
 * Calculates the current coordinates based on the old and new coordinates,
 * start time, end time, and current time.
 *
 * @param {Object} oldCoords - The old coordinates object containing lat and long properties.
 * @param {Object} newCoords - The new coordinates object containing lat and long properties.
 * @param {number} startTime - The start time in milliseconds.
 * @param {number} endTime - The end time in milliseconds.
 * @param {number} currentTime - The current time in milliseconds.
 * @return {Object} The current coordinates object containing lat and long properties.
 */
export function getCurrentCoords(oldCoords: { lat: number; long: number; }, newCoords: { lat: number; long: number; }, startTime: number, endTime: number, currentTime: number) {
    const timeDiff = endTime - startTime;

    const progress = (currentTime - startTime) / timeDiff;

    const clampedProgress = Math.max(0, Math.min(progress, 1));

    const currentLat = oldCoords.lat + (newCoords.lat - oldCoords.lat) * clampedProgress;
    const currentLong = oldCoords.long + (newCoords.long - oldCoords.long) * clampedProgress;

    return { lat: currentLat, long: currentLong };
}