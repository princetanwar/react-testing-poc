import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("use counter", () => {
  test("call hook", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test("should start counter with 5", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 5 },
    });
    expect(result.current.count).toBe(5);
  });

  test("increment counter", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("increment by 5", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.increment(5);
    });
    expect(result.current.count).toBe(5);
  });

  test("decrement counter", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(-1);
  });
  test("decrement by 10", () => {
    const { result } = renderHook(useCounter);
    act(() => {
      result.current.decrement(10);
    });
    expect(result.current.count).toBe(-10);
  });
});
