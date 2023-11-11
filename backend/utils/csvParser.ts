import { readFileSync } from "fs";
import { resolve } from "path";
import { parse } from 'csv-parse';
import { Stage, Station, Train, Wagon } from "../types/types";


export async function parseStage(filename: string): Promise<Stage[]> {
  const stageHeaders = ["START_CODE", "END_CODE", "LEN"]
  let temp: Stage[] = [];

  const csvFilePath = resolve(import.meta.dir, filename);
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });

  const parser = parse(fileContent,
    // {delimiter: ',',columns: stageHeaders,});
    { columns: true });
  for await (const record of parser) {
    temp.push({
      start: record.START_CODE - 0,
      end: record.END_CODE - 0,
      length: record.LEN - 0
    });
  }
  return temp;
}


export async function parseStations(filename: string): Promise<Station[]> {
  const stationHeaders = ["ST_ID", "LATITUDE", "LONGITUDE"]

  const csvFilePath = resolve(import.meta.dir, filename);
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });

  let temp: Station[] = [];
  const parser = parse(fileContent,
    // {delimiter: ',',columns: stationHeaders,});
    { columns: true });
  for await (const record of parser) {
    temp.push({
      station_id: record.ST_ID - 0,
      latitude: record.LATITUDE - 0,
      longitude: record.LONGITUDE - 0
    });
  }
  return temp;
}


export async function parseTrains(filename: string): Promise<Train[]> {
  const trains: Train[] = [];

  const csvFilePath = resolve(import.meta.dir, filename);
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });

  const parsed = await new Promise<any>((resolve, reject) => {
    parse(fileContent, { columns: true }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  parsed.forEach((row: any) => {
    const trainIndexParts = row.TRAIN_INDEX.split('-');
    if (trainIndexParts.length === 3) {
      const startId = parseInt(trainIndexParts[0]);
      const trainNumber = parseInt(trainIndexParts[1]);
      const endId = parseInt(trainIndexParts[2]);

      const train: Train = {
        train_number: trainNumber -0,
        is_move: true, // Assuming is_move always true for the provided data
        start_id: startId -0,
        end_id: endId -0 ,
      };

      trains.push(train);
    }
  });

  return trains;
}


export async function parseWagons(filename: string): Promise<Wagon[]> {
  const csvFilePath = resolve(import.meta.dir, filename);
  const fileContent = readFileSync(csvFilePath, { encoding: 'utf-8' });

  const wagons: Wagon[] = [];

  const parsed = await new Promise<any>((resolve, reject) => {
    parse(fileContent, { columns: true }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
  parsed.forEach((row: any) => {
    const trainIndexParts = row.TRAIN_INDEX.split('-');
    const trainNumber = parseInt(trainIndexParts[1]);
    const wagon: Wagon = {
      wagon_number: row.WAGNUM - 0,
      train_id: trainNumber - 0,
      destination_id: row.ST_ID_DEST - 0
    }
    wagons.push(wagon);
  }
  );
  return wagons
}