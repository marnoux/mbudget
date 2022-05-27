import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button, CloseButton, Form, Row, Stack } from 'react-bootstrap';
import { supabase } from '../../utils/supabase';

interface AvatarProps {
	url: string;
	size: number;
	onUpload: (url: string) => void;
}

const Avatar = ({ url, size, onUpload }: AvatarProps) => {
	const [avatarUrl, setAvatarUrl] = useState<String | null>(null);
	const [uploading, setUploading] = useState(false);
	const [update, setUpdate] = useState(false);

	useEffect(() => {
		if (url) downloadImage(url);
	}, [url]);

	const downloadImage = async (path: any) => {
		try {
			const { data, error } = await supabase.storage.from('avatars').download(path);

			if (error) throw error;

			// @ts-ignore
			const url = URL.createObjectURL(data);

			setAvatarUrl(url);
		} catch (error) {
			console.log('🚀 ~ file: Avatar.tsx ~ line 21 ~ downloadImage ~ error', error);
		}
	};

	const uploadAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			setUploading(true);
			if (!event.target.files || event.target.files.length === 0) {
				throw new Error('You must select an image to upload');
			}

			const file = event.target.files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `${fileName}`;

			let { error: upLoadError } = await supabase.storage.from('avatars').upload(filePath, file);

			if (upLoadError) throw upLoadError;

			onUpload(filePath);
		} catch (error: any) {
			alert(error.message);
		} finally {
			setUploading(false);
			setUpdate(false);
		}
	};

	const onUpdateChange = () => {
		setUpdate(!update);
	};

	return (
		<Stack gap={3} className='col-md-7 mx-auto'>
			{avatarUrl ? (
				// Image with may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.
				<div>
					<Image
						// @ts-ignore
						src={avatarUrl}
						alt='Avatar'
						className='avatar image'
						width={size}
						height={size}
						layout='responsive'
					/>
				</div>
			) : (
				<div className='avatar no-image' style={{ height: size, width: size }} />
			)}
			{!update && <Button onClick={onUpdateChange}>New Avatar</Button>}
			{update && (
				<Form.Group controlId='single'>
					<Stack direction='horizontal' gap={2}>
						<Form.Control
							type='file'
							accept='image/*'
							onChange={uploadAvatar}
							disabled={uploading}
						/>
						<CloseButton onClick={onUpdateChange} />
					</Stack>
				</Form.Group>
			)}
		</Stack>
	);
};

export default Avatar;
