import React from "react";
import { FaUser, FaStopwatch, FaArrowRightLong } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";

const ResourceDetails = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-4xl font-bold">
        Lorem ipsum dolor sit amet Lorem amet ipsum dolor sit amet
      </h2>

      <div className="flex items-center gap-4">
        <div className="inline-flex items-center gap-2">
          <FaUser className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">Name</h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaStopwatch className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">Reading time 3min read</h6>
        </div>
        <span className="text-primary-red font-bold">/</span>
        <div className="inline-flex items-center gap-2">
          <FaRegCalendarAlt className="text-primary-red" size={18} />

          <h6 className="text-sm text-gray-600">25 Jan, 2024</h6>
        </div>
      </div>

      <Image width={950} height={550} src={"/blog2.png"} alt="" />
      <p className="text-gray-600 text-sm max-w-[950px]">
        Lörem ipsum kaktigt navir autossade. Diaher eurojol last och kror,
        hubot. Prelig krov anaform. Belulig vävana sejoktiga. Teradat råjade
        göning jågöskapet soväs. Uling nujona. Sms-livräddare dunade. Tel rägon.
        Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är lemid
        nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde. Tel
        rägon. Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är
        lemid nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde.{" "}
      </p>

      <h2 className="text-4xl font-bold">
        Lorem ipsum dolor sit amet Lorem amet ipsum dolor sit amet
      </h2>
      <Image width={950} height={550} src={"/blog1.png"} alt="" />
      <p className="text-gray-600 text-sm max-w-[950px]">
        Lörem ipsum kaktigt navir autossade. Diaher eurojol last och kror,
        hubot. Prelig krov anaform. Belulig vävana sejoktiga. Teradat råjade
        göning jågöskapet soväs. Uling nujona. Sms-livräddare dunade. Tel rägon.
        Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är lemid
        nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde. Tel
        rägon. Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är
        lemid nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde.{" "}
      </p>

      <h2 className="text-4xl font-bold">
        Lorem ipsum dolor sit amet Lorem amet ipsum dolor sit amet
      </h2>
      <Image width={950} height={550} src={"/blog2.png"} alt="" />
      <p className="text-gray-600 text-sm max-w-[950px]">
        Lörem ipsum kaktigt navir autossade. Diaher eurojol last och kror,
        hubot. Prelig krov anaform. Belulig vävana sejoktiga. Teradat råjade
        göning jågöskapet soväs. Uling nujona. Sms-livräddare dunade. Tel rägon.
        Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är lemid
        nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde. Tel
        rägon. Nanaras nerad. Jas biojåre, stenopörar. Tilaliga fuldelning: är
        lemid nin. Cyntris. Ant astrogt. Suprar anas podolig mäling miktiga.
        Interaktiv skrivtavla kompetensutvisning. Mossgraffiti klimatvänlig
        etnoskop i ver ensocial. Verertad nybel. Autosk tiliga pantes. Din sen
        när mytogram, och didat. Heterosocial den: i iliga egorad reväde.{" "}
      </p>
    </div>
  );
};

export default ResourceDetails;
