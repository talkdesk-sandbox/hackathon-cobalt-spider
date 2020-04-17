#!/bin/bash
rm -rf repositories
mkdir repositories

while IFS= read -r line; do
  git -C repositories clone $line
done < "$1"
