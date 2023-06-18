VERSION=$(shell git describe --tags)
NOMBRE="vanilla-editor"
NOMBREBIN="vanilla-editor"
DATE=`date +'%y.%m.%d %H:%M:%S'`


N=[0m
G=[01;32m
Y=[01;33m
B=[01;34m

define log
	@echo "${G}▷$(1) ${N}"
endef

define task
	@echo ""
	@echo "${Y}-$(1)${N}"
endef

comandos:
	@echo ""
	@echo "${B}Comandos disponibles para ${Y}${NOMBRE}${N} (versión: ${VERSION})"
	@echo ""
	@echo "  ${Y}Generales de la aplicación${N}"
	@echo ""
	@echo "    ${G}iniciar${N}"
	@echo "    ${G}ejecutar${N}"
	@echo "    ${G}compilar${N}"
	@echo "    ${G}compilar-pilas${N}"
	@echo "    ${G}compilar-pilas-live${N}"
	@echo ""
	@echo ""

iniciar:
	$(call task, "Iniciando el proyecto.")
	$(call log, "Instalando dependencias.")
	@npm install

ejecutar:
	npm run dev

compilar:
	npm run build

compilar-pilas:
	npm run compilar-pilas

compilar-pilas-live:
	npm run compilar-pilas-live


# Alias

build: compilar
server: ejecutar
s: ejecutar
