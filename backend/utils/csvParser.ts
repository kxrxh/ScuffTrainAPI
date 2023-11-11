import { readFileSync } from "fs";
import { resolve } from "path";
import { parse } from 'csv-parse';
import { Dislocation, Stage, Station } from "../types/types";


/**
 * Parses a dislocation file and returns the result.
 *
 * @param {string} filename - The name of the file to parse.
 * @return {Dislocation[]} An array of dislocations parsed from the file.
 */
export async function parseDislocation(filename: string): Promise<Dislocation[]> {
  const csvFilePath = resolve(import.meta.dir, `data/${filename}`);
  const dislocationHeaders = ["WAGNUM", "OPERDATE", "ST_ID_DISL", "ST_ID_DEST", "TRAIN_INDEX"]
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });
  let temp: Dislocation[] = [];
  const parser = parse(fileContent, {
    delimiter: ',',
    columns: dislocationHeaders,
  });
  for await (const record of parser) {
    temp.push(record);
  }
  return temp;
}

/**
 * Parses a stage from a CSV file.
 *
 * @param {string} filename - The name of the CSV file to parse.
 * @return {Stage[]} An array of Stage objects representing the parsed data.
 */
export async function parseStage(filename: string): Promise<Stage[]> {
  const csvFilePath = resolve(import.meta.dir, `data/${filename}`);
  const stageHeaders = ["START_CODE", "END_CODE", "LEN"]
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });
  let temp: Stage[] = [];
  const parser = parse(fileContent, {
    delimiter: ',',
    columns: stageHeaders,
  });
  for await (const record of parser) {
    temp.push(record);
  }
  return temp;
}

/**
 * Parses a CSV file containing station data and returns an array of Station objects.
 *
 * @param {string} filename - The name of the CSV file to parse.
 * @return {Station[]} An array of Station objects representing the data in the CSV file.
 */
export async function parseStations(filename: string): Promise<Station[]> {
  const csvFilePath = resolve(import.meta.dir, `data/${filename}`);
  const stationHeaders = ["ST_ID", "LATITUDE", "LONGITUDE"]
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });
  let temp: Station[] = [];
  const parser = parse(fileContent, {
    delimiter: ',',
    columns: stationHeaders,
  });
  for await (const record of parser) {
    temp.push(record);
  }
  return temp;
}