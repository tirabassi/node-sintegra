import { fetchSintegra } from "../src";

describe("test sintegra df", () => {
	test("valid df cnpj", async () => {
		const result = await fetchSintegra("00082024000137", "DF");
		expect(result).toStrictEqual({
			identificacao: {
				cnpj: "00082024000137",
				cfDf: "0732466700167",
				razaoSocial:
					"COMPANHIA DE SANEAMENTO AMBIENTAL DO DISTRITO FEDERAL - CAESB",
				nomeFantasia: "CAESB",
			},
			endereco: {
				logradouro: "AV SIBIPIRUNA LOTES13/20",
				numero: "",
				complemento: "",
				bairro: "AGUAS CLARAS",
				municipio: "BRASILIA",
				uf: "DF",
				cep: "71928720",
				telefone: "(61 ) 32137478 / (61 ) 32137115",
			},
			informacoesComplementares: {
				atividadePrincipal:
					"E360060100 - Captação, tratamento e distribuição de água",
				atividadeSecundaria: "",
				regimeDeApuracao: "Normal",
				situacaoCadastral: "Ativo",
				dataDessaSituacaoCadastral: "21/06/2016",
				situacaoSintegra: "Habilitado",
			},
		});
	});
	test("inexistent registry in df", async () => {
		try {
			await fetchSintegra("00394601000126", "DF");
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
			expect(err).toHaveProperty(
				"message",
				"Não foi cadastrado como contribuinte de ICMS",
			);
		}
	});
	test("inexistent registry in df #2", async () => {
		try {
			await fetchSintegra("40612757000150", "DF");
		} catch (err) {
			expect(err).toBeInstanceOf(Error);
			expect(err).toHaveProperty(
				"message",
				"Não foi cadastrado como contribuinte de ICMS",
			);
		}
	});
});
