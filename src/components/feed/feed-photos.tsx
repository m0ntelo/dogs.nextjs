import { Photo } from "@/actions/photos-get";
import Link from "next/link";
import Image from "next/image";
import styles from './feed.module.css';

export default function FeedPhotos({ photos } : { photos: Photo[] }) {
	return (
		<div>
			<ul className={`${styles.feed} animeLeft`}>
				{ photos.map((photo, i ) => (
					<li className={styles.photo} 
							key={photo.id + i}>
						<Link href={`/foto/${photo.id}`} 
									scroll={false}>
							<Image 
								src={photo.src}
								width={1500}
								height={1500}
								alt={photo.title}
								sizes='80vw'
							/>
							<span className={styles.visualizacao}>
								{photo.acessos}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}