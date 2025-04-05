import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

export default function _date(inputDateValue) {
	return dayjs(inputDateValue).calendar("jalali").locale("fa");
}
