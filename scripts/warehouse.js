import { PrismaClient } from '@prisma/client'
import csv from 'csv-parser'
import { create } from 'domain';
import fs from 'fs'
import { countToCode } from './country.js';

const prisma = new PrismaClient()
