import { SpecReporter } from 'jasmine-spec-reporter';
import { DisplayProcessor } from 'jasmine-spec-reporter';
import SuiteInfo = jasmine.JasmineStartedInfo;

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayPending: true,
    displayDuration: true,
  },
  summary: {
    displayDuration: true,
  },
  customProcessors: [CustomProcessor],
}));
