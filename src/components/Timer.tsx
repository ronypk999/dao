import { useTimer } from "react-timer-hook";
import { useInfoContext } from "../hook/ContextHook";
import { useTranslation } from "react-i18next";

export default function Timer() {
  const { t } = useTranslation();
  const { presaleEndTime } = useInfoContext();
  let expiryTimestamp;

  if (presaleEndTime) {
    expiryTimestamp = new Date(presaleEndTime);
  } else {
    expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 100000);
  }

  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Presale time is finished"),
  });

  return (
    <div>{days}d {hours}h {minutes}m {seconds}s</div>
  );
}
