import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface ApplicationCardProps {
  img: StaticImageData;
  title: string;
  content: string;
}

const ApplicationCard = ({ img, title, content }: ApplicationCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex items-center gap-6">
            <div className="relative w-[2.625rem] h-[2.813rem]">
              <Image
                src={img}
                alt="Image logo"
                fill
                className="object-cover absolute"
                placeholder="blur"
              />
            </div>
            <span className="font-semibold text-xl">{title}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default ApplicationCard;
