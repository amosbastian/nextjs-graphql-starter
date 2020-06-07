/* eslint-disable @typescript-eslint/camelcase */
import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

export const cloudinaryUrl = (
  publicId: string,
  options: Record<string, any> = {},
) => {
  const snakeCaseOptions = Util.withSnakeCaseKeys(options);

  const cloudinary = CoreCloudinary.new({
    cloud_name: process.env.cloudinaryCloudName,
    api_secret: process.env.cloudinaryApiSecret,
    api_key: process.env.cloudinaryApiKey,
  });

  return cloudinary.url(publicId, snakeCaseOptions);
};

export default cloudinaryUrl;
