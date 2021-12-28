export function remaining(current: Date, end: Date) {
  const remainingTotalSeconds = differenceInSeconds(current, end);
  const minutes = remainingTotalSeconds / 60;
  const seconds = remainingTotalSeconds % 60;
  return [minutes, seconds].map((val) => Math.max(val | 0, 0));
}

export function inFuture(
  minutes: number,
  seconds: number,
  future: Date = new Date()
) {
  future.setMinutes(
    future.getMinutes() + minutes,
    future.getSeconds() + seconds
  );
  return future;
}

export function differenceInSeconds(a: Date, b: Date) {
  return (b.getTime() - a.getTime()) / 1000;
}
