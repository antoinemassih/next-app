import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import img1 from "../../assets/gallery/IMG_0175.jpeg";
import img2 from "../../assets/gallery/IMG_0186.jpeg";
import img3 from "../../assets/gallery/IMG_1576.jpeg";
import img4 from "../../assets/gallery/IMG_1866.jpeg";
import img5 from "../../assets/gallery/PHOTO-2025-07-12-16-10-32.jpg";
import img6 from "../../assets/gallery/Safari.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];
  const last = images[images.length - 1];
  const topFirst = images[0];
  const topSecond = images[1];
  const previousTopThird = images[2];
  const wide = images[3];
  const tall = images[4];
  return (
    <section id="gallery" className="border-t border-border py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="It Runs in the family"
          subtitle="Experience the beauty and performance in every frame"
          className="mb-16"
        />
        {/* Row 1: three tall tiles (make 'last' the 3rd position) */}
        <div className="grid grid-cols-3 gap-3">
          {topFirst && (
            <div className="col-span-1 aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={topFirst} alt="Gallery image 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
              </div>
            </div>
          )}
          {topSecond && (
            <div className="col-span-1 aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={topSecond} alt="Gallery image 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
              </div>
            </div>
          )}
          {last && (
            <div className="col-span-1 aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={last} alt="Gallery image 3" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
              </div>
            </div>
          )}
        </div>
        <div className="h-3" />
        {/* Featured full-width banner: previous top third */}
        {previousTopThird && (
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-3 aspect-[16/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={previousTopThird} alt="Featured gallery image" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
              </div>
            </div>
          </div>
        )}
        <div className="h-3" />
        {/* Row 2: wide (8/5) + tall (4/5) */}
        <div className="grid grid-cols-3 gap-3">
          {wide ? (
            <div className="col-span-2 aspect-[8/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={wide} alt="Gallery image 4" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw" />
              </div>
            </div>
          ) : <div className="col-span-2" />}
          {tall ? (
            <div className="col-span-1 aspect-[4/5] overflow-hidden rounded-xl border border-border">
              <div className="relative h-full w-full">
                <Image src={tall} alt="Gallery image 5" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw" />
              </div>
            </div>
          ) : null}
        </div>

        {/* Row 3: (removed single tile; now featured above) */}
      </div>
    </section>
  );
}
