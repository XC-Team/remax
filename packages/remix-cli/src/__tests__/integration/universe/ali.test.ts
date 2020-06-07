import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '@alipay/remix-types';

describe('build universe app in ali', () => {
  runTest('universe', Platform.ali, path.resolve(__dirname, `../fixtures/universe/expected/ali`));
});