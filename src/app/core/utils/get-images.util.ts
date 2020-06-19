import { HouseItemType } from 'src/app/shared/enums/house-item-type.enum';
import { HouseItem } from 'src/app/shared/models/house-item.model';

export function getImagesByType(type): HouseItem[] {
  switch (type) {
    case HouseItemType.APPLIANCES:
      return Array(108)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/appliances/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.BATHROOMS:
      return Array(40)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/bathrooms/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.BEDS:
      return Array(12)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/beds/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.CABINETS:
      return Array(78)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/cabinets/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.CHAIRS:
      return Array(44)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/chairs/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.DOORS:
      return Array(12)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/doors/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.MATS:
      return Array(40)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/mats/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.OTHERS:
      return Array(25)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/others/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.SOFAS:
      return Array(52)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/sofas/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.TABLES:
      return Array(61)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/tables/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.TILES:
      return Array(1)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/tile.png`,
          position: { x: 0, y: 0 },
        }));
    case HouseItemType.WALLS:
      return Array(32)
        .fill(1)
        .map((n, i) => ({
          type,
          path: `assets/images/walls/1 (${i + 1}).png`,
          position: { x: 0, y: 0 },
        }));
  }
}
