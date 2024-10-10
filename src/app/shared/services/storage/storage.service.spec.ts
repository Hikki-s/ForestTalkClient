import { TestBed } from "@angular/core/testing";
import { StorageService } from "./storage.service";

describe("StorageService", () => {
  let service: StorageService;
  let localStorageMock: Storage;
  let sessionStorageMock: Storage;

  beforeEach(() => {
    localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    } as any;

    sessionStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      removeItem: jest.fn(),
      clear: jest.fn(),
    } as any;

    // Подмена window.localStorage и window.sessionStorage
    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
      writable: true,
    });
    Object.defineProperty(window, "sessionStorage", {
      value: sessionStorageMock,
      writable: true,
    });

    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Очистка мока для каждого теста
  });

  it("Если ключ и значение переданы, то setItem должен сохранить данные в localStorage", () => {
    // Arrange
    const key = "testKey";
    const value = { data: "testData" };

    // Act
    service.setItem(key, value);

    // Assert
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("Если ключ и значение переданы, то setItem должен сохранить данные в sessionStorage при использовании sessionStorage", () => {
    // Arrange
    const key = "testKey";
    const value = { data: "testData" };

    // Act
    service.setItem(key, value, true);

    // Assert
    expect(sessionStorageMock.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  it("Если ключ существует в localStorage, то getItem должен вернуть данные", () => {
    // Arrange
    const key = "testKey";
    const value = { data: "testData" };
    localStorageMock.getItem = jest.fn().mockReturnValue(JSON.stringify(value));

    // Act
    const result = service.getItem(key);

    // Assert
    expect(result).toEqual(value);
  });

  it("Если ключ существует в sessionStorage, то getItem должен вернуть данные", () => {
    // Arrange
    const key = "testKey";
    const value = { data: "testData" };
    sessionStorageMock.getItem = jest
      .fn()
      .mockReturnValue(JSON.stringify(value));

    // Act
    const result = service.getItem(key, true);

    // Assert
    expect(result).toEqual(value);
  });

  it("Если ключ отсутствует, то getItem должен вернуть null", () => {
    // Arrange
    const key = "testKey";
    localStorageMock.getItem = jest.fn().mockReturnValue(null);

    // Act
    const result = service.getItem(key);

    // Assert
    expect(result).toBeNull();
  });

  it("Если ключ существует, то removeItem должен удалить данные из localStorage", () => {
    // Arrange
    const key = "testKey";

    // Act
    service.removeItem(key);

    // Assert
    expect(localStorageMock.removeItem).toHaveBeenCalledWith(key);
  });

  it("Если ключ существует, то removeItem должен удалить данные из sessionStorage при использовании sessionStorage", () => {
    // Arrange
    const key = "testKey";

    // Act
    service.removeItem(key, true);

    // Assert
    expect(sessionStorageMock.removeItem).toHaveBeenCalledWith(key);
  });

  it("Если clear вызывается, то должны быть очищены все данные из localStorage", () => {
    // Act
    service.clear();

    // Assert
    expect(localStorageMock.clear).toHaveBeenCalled();
  });

  it("Если clear вызывается, то должны быть очищены все данные из sessionStorage при использовании sessionStorage", () => {
    // Act
    service.clear(true);

    // Assert
    expect(sessionStorageMock.clear).toHaveBeenCalled();
  });

  it("Если ключ существует, то hasItem должен вернуть true для localStorage", () => {
    // Arrange
    const key = "testKey";
    localStorageMock.getItem = jest.fn().mockReturnValue("value");

    // Act
    const result = service.hasItem(key);

    // Assert
    expect(result).toBe(true);
  });

  it("Если ключ не существует, то hasItem должен вернуть false для localStorage", () => {
    // Arrange
    const key = "testKey";
    localStorageMock.getItem = jest.fn().mockReturnValue(null);

    // Act
    const result = service.hasItem(key);

    // Assert
    expect(result).toBe(false);
  });
});
