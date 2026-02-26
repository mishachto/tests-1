import { useGeo } from "@features/geo";
import type { GeoId } from "@features/geo";
import { Select } from "@shared/components/select";
import { GeoSelectorWrapper } from "./GeoSelector.styles";

const geoOptions = [
  { value: "en", label: "Geo: EN" },
  { value: "tr", label: "Geo: TR" },
  { value: "it", label: "Geo: IT" },
];

export const GeoSelector = () => {
  const { geoId, setGeoId } = useGeo();

  return (
    <GeoSelectorWrapper>
      <Select
        value={geoId}
        defaultValue="en"
        options={geoOptions}
        onChange={(val) => setGeoId(val as GeoId)}
      />
    </GeoSelectorWrapper>
  );
};
