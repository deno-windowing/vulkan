#include <vulkan/vulkan.h>
#include <stdio.h>

int main() {
  printf("propsize %d memtypeoff %d memtysize %d hcountoff %d\n", sizeof(VkPhysicalDeviceMemoryProperties), offsetof(VkPhysicalDeviceMemoryProperties, memoryTypes), sizeof(VkMemoryType), offsetof(VkPhysicalDeviceMemoryProperties, memoryHeapCount));
  return 0;
}
