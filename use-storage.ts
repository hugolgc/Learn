import { ref, watch, UnwrapRef } from "vue";

export function useStorage<T>(key: string, defaultValue: T) {
  const reference = ref<T>(getFromLocalStorage());
  const customStorageEvent = new Event("custom-storage");

  document.addEventListener("custom-storage", () => {
    const newValue = getFromLocalStorage();
    if (JSON.stringify(reference.value) !== JSON.stringify(newValue)) {
      reference.value = newValue;
    }
  });

  watch(reference, setToLocalStorage, { deep: true });

  function getFromLocalStorage() {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  }

  function setToLocalStorage(value: UnwrapRef<T>) {
    localStorage.setItem(key, JSON.stringify(value));
    document.dispatchEvent(customStorageEvent);
  }

  return reference;
}
