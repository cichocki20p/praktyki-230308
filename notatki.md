## 06.03.2023 <PN>
Pierwszego dnia praktyk poznałem zasady bhp dotyczące pracy programisty jak i te panujące na terenie budynku w którym przebywałem.
Dowiedziałem się czym jest środowisko Node.js, jakie ma zastosowania i zainstalowałem je na używanym przeze mnie laptopie.
Postawiłem pierwszy lokalny serwer przy użyciu Node.js i dokonałem połączenia z przykładowym api.
Napisałem prosty program używając frameworku Express oraz dokonałem utworzyłem po raz pierwszy bazę danych sqlite.
- npm init by stworzyć jsona
- front end: react / angular
- back end: express

## 07.03.2023 <WT>
definition of done
scrum niestety często służy do kontroli i rozliczania deweloperów
dużo zasobów jest marnowanych na trzymanie się scruma - ludzie dla scruma zamiast na odwrót
### Docker
Czym jest. Jakie ma zastosowania. Co zastępuje. Co upraszcza.
Czemu jest kluczowy.
Instalacja DockerDesktop.
Konfiguracja DockerDesktop.
Utworzenie pierwszego pliku DockerFile w przykładowym projekcie.

## 08.03.2023 <SR>
Czym jest npm.
Jak działa instalowanie pakietów poprzez npm.
Czym jest nvm.
Różnica pomiędzy cmd a PowerShell w Windowsie.
### Instalacja środowiska Node.js na Linuxie (Ubuntu)
### Uczestnictwo w spotkaniu podsumowującym sprint
### GitHub
Utworzenie pierwszego repozytorium poświęconego praktykom na GitHubie.
Utworzenie połączenia między Visual Studio Code a w/w repozytorium za pośrednictwem terminala w VSC
Poznanie komend npm i node.

## 09.03.2023 <CZW>
Instalacja WSL
Instalacja wybranej dystrybucji linuxa - Ubuntu przy użyciu WSL
Konfiguracja środowiska developerskiego pod Ubuntu
Instalacja wtyczki Remote Developement do lokalnego VSC
Różnica między środowiskiem programistycznym (IDE), a środowiskiem uruchomieniowym (np. runtime)
Uruchomienie VSC przy użyciu komendy ($ code .)
Wykonanie połączenia z repozytorium przy użyciu Linuxowego terminala
Poznanie wielu nowych gitowych komend.

- gh auth login
- (git config --global user.email "you@example.com")
- (git config --global user.name "Your Name")
- git add         (staging)
- git commit -m   (update'uje moją wersję)
- git push        (push wysyła do repozytorium)

gdybym coś zpushował a zapomniał o dodaniu do poczekalni czegoś:
    jest komenda na dodanie pliku do ostatniego commita (o ile go nie zpushowałem)
    $ git commit --amend
    $ git push
    powinno się używać tylko jeżeli nie zpushowałem danych

środowisko - może być edytorem, dodatkami do tego edytora itd (środowisko programistyczne - IDE)
środowisko - (środowisko uruchomieniowe - runtime) zbiór bibliotek i kompilatorów/parserów itp