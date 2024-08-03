type GroupsMap<Group> = {
  [key: string]: Group[];
};

export function groupByKey<Group>(
  items: Group[],
  key: keyof Group,
): GroupsMap<Group> {
  const grouppedItems: GroupsMap<Group> = items.reduce((result, current) => {
    const itemKey = current[key] as string;

    if (result[itemKey]) {
      result[itemKey] = [...result[itemKey], current];
    } else {
      result[itemKey] = [current];
    }

    return result;
  }, {} as GroupsMap<Group>);

  return grouppedItems;
}
