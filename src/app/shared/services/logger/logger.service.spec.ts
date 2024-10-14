import { TestBed } from "@angular/core/testing";
import { LogLevel } from "@shared/constants/enums";
import { debug } from "debug";
import { LoggerService } from "./logger.service";

jest.mock("debug");
const mockDebug = jest.fn();

(debug as unknown as jest.Mock).mockImplementation(() => mockDebug);

describe("LoggerService", () => {
  let loggerService: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService, { provide: String, useValue: "TestLogger" }],
    });

    loggerService = TestBed.inject(LoggerService);
  });

  it("Если логгируется сообщение с уровнем DEBUG, то оно корректно выводится в консоль", () => {
    const testMessage = "Test debug message";

    loggerService.debug(testMessage);

    expect(mockDebug).toHaveBeenCalledWith("%j", {
      message: testMessage,
      logLevel: LogLevel.DEBUG,
    });
  });

  it("Если логгируется сообщение с уровнем INFO, то оно корректно выводится в консоль", () => {
    const testMessage = "Test info message";

    loggerService.info(testMessage);

    expect(mockDebug).toHaveBeenCalledWith("%j", {
      message: testMessage,
      logLevel: LogLevel.INFO,
    });
  });

  it("Если логгируется сообщение с уровнем WARN, то оно корректно выводится в консоль", () => {
    const testMessage = "Test warn message";

    loggerService.warn(testMessage);

    expect(mockDebug).toHaveBeenCalledWith("%j", {
      message: testMessage,
      logLevel: LogLevel.WARN,
    });
  });

  it("Если логгируется сообщение с уровнем ERROR, то оно корректно выводится в консоль", () => {
    const testMessage = "Test error message";

    loggerService.error(testMessage);

    expect(mockDebug).toHaveBeenCalledWith("%j", {
      message: testMessage,
      logLevel: LogLevel.ERROR,
    });
  });

  it("Если включается логгирование, то оно активируется для указанного уровня", () => {
    loggerService.enableLogging(LogLevel.DEBUG);

    expect(debug.enable).toHaveBeenCalledWith("debug:*");
  });

  it("Если отключается логгирование, то оно отключается", () => {
    loggerService.disableLogging();

    expect(debug.disable).toHaveBeenCalled();
  });
});
