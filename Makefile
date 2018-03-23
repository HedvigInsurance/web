.PHONY: clean prepare-build

clean:
	-cd ../hedvig-redux; rm -rf build

prepare-build:
	make clean
