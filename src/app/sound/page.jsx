import fetcher from "@/src/api/fetcher";
import SoundCard from "@/src/components/page/sound/soundCard";
import Container from "@/src/components/ui/container";
import ENDPOINTS_PATH from "@/src/constants/endpointsPath";
import _date from "@/src/utils/date";
import soundsResponseMapper from "@/src/utils/soundsResponseMapper";

const Sounds = async () => {
	const response = await fetcher(ENDPOINTS_PATH.sound);
	const data = await response.json();
	const mappedSoundsList = soundsResponseMapper(data);

	return (
		<div>
			<Container
				style={{
					background:
						"transparent linear-gradient(180deg, #1C6FCC0A 0%, #1C6FCC05 51%, #1C6FCC0A 100%) 0% 0% no-repeat padding-box;",
				}}
			>
				<div className="grid grid-cols-4 gap-4 mt-10 p-5">
					{[...mappedSoundsList, ...mappedSoundsList, ...mappedSoundsList].map((sound, i) => (
						<SoundCard id={sound.id} img={""} onPlay={() => {}} title={sound.title} key={i} />
					))}
				</div>
			</Container>
		</div>
	);
};

export default Sounds;
